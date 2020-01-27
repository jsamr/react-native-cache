import { cold, hot } from 'jest-marbles'
import { buildTasks } from '../build-tasks'
import { from, defer, empty } from 'rxjs'
import { StorageDriverInterface } from '../../types/StorageDriverInterface'
import { ResourceCacheRegistry } from '../../types/ResourceCacheRegistry'
import { EngineInput } from '../../internal/EngineInput'

class StorageDriver implements StorageDriverInterface {
  load(def: ResourceCacheRegistry) {
    return new Promise<ResourceCacheRegistry>(res => setTimeout(() => res(def), 1000))
  }
  clear() {
    return new Promise<void>(res => setTimeout(res, 1000))
  }
  save() {
    return new Promise<void>(res => setTimeout(res, 1000))
  }
}

function assembleInput(overwrites?: Partial<EngineInput>): EngineInput {
  const driver = new StorageDriver()
  return {
    // deleteRequests$: empty(),
    preloadRequests$: empty(),
    // revalidateRequests$: empty(),
    environment$: from([{}]),
    registry$: defer(() => from(driver.load({}))),
    ...overwrites,
  }
}

describe('engine/build-tasks', () => {
  it('Should wait for registry prior to triggering tasks', () => {
    const inputs = assembleInput({
      preloadRequests$: hot('^A--B|', { A: 'https://A.A', B: 'https://B.B' }),
      registry$: hot('^-a--|', { a: {} }),
    })
    const engine = buildTasks(inputs)
    const expected = cold('--A-B|', { A: { uri: 'https://A.A' }, B: { uri: 'https://B.B' } })
    expect(engine.preloadTasks$).toBeObservable(expected)
  })
  it('Should emit only when requests emit', () => {
    const inputs = assembleInput({
      preloadRequests$: hot('^A------|', { A: 'https://A.A' }),
      registry$: hot('^-a--b--|', { a: {}, b: {} }),
    })
    const engine = buildTasks(inputs)
    const expected = cold('--A-----|', { A: { uri: 'https://A.A' } })
    expect(engine.preloadTasks$).toBeObservable(expected)
  })
})
