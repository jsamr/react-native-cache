import { Subject, from, of, Observable } from 'rxjs'
import { withLatestFrom } from 'rxjs/operators'
import { CacheConfig } from '../types/CacheConfig'
import { EngineInput } from '../internal/EngineInput'
import { ResourceCacheRegistry } from '../types/ResourceCacheRegistry'
import { TaskPayload } from '../internal/TaskPayload'
import { RequestDefinition } from '../internal/RequestDefinition'
import { lazyWith } from './lazy-with'

function buildPayloads(
  registry$: Observable<ResourceCacheRegistry>,
  requests$: Observable<RequestDefinition>,
): Observable<TaskPayload> {
  return requests$.pipe(
    withLatestFrom(registry$, ({ resource, type }, registry) => ({
      type,
      resource,
      info: registry[resource.uri] || { uri: resource.uri, registered: false },
    })),
  )
}

export function buildEngine(config: CacheConfig) {
  const driver = new config.StorageDriver(config.name)
  const initialRegistry$ = from(driver.load({}))
  const input: EngineInput = {
    requests$: new Subject(),
    registry$: initialRegistry$,
    environment$: of({}),
  }
  const requests$ = lazyWith(input.requests$, input.registry$)
  buildPayloads(input.registry$, requests$).subscribe(re => console.info(re))
}
