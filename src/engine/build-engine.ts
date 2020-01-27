import { Subject, from, of, Observable, combineLatest } from 'rxjs'
import { map } from 'rxjs/operators'
import { CacheConfig } from '../types/CacheConfig'
import { buildTasks } from './build-tasks'
import { EngineInput } from '../internal/EngineInput'
import { ResourceCacheRegistry } from '../types/ResourceCacheRegistry'
import { ResourceDefinition } from '../types/ResourceDefinition'
import { TaskPayload } from '../internal/TaskPayload'

function buildPayloads(
  registry$: Observable<ResourceCacheRegistry>,
  tasks$: Observable<ResourceDefinition>,
): Observable<TaskPayload> {
  return combineLatest(registry$, tasks$).pipe(
    map(([registry, resource]) => ({
      resource,
      info: registry[resource.uri] || { uri: resource.uri, registered: false },
    })),
  )
}

export function buildEngine(config: CacheConfig) {
  const driver = new config.StorageDriver(config.name)
  const initialRegistry$ = from(driver.load({}))
  const input: EngineInput = {
    // deleteRequests$: new Subject(),
    preloadRequests$: new Subject(),
    // revalidateRequests$: new Subject(),
    registry$: initialRegistry$,
    environment$: of({}),
  }
  const tasks = buildTasks(input)
  const preloadPayloads$ = buildPayloads(input.registry$, tasks.preloadTasks$)
}
