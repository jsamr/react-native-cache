import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { TargetResource } from '../types/TargetResource'
import { normalizeTarget } from './normalize-target'
import { ResourceCacheRegistry } from '../types/ResourceCacheRegistry'
import { EngineInput } from '../internal/EngineInput'
import { lazyWith } from './lazy-with'

function toTaskStream(request$: Observable<TargetResource>, registry$: Observable<ResourceCacheRegistry>) {
  return lazyWith(request$, registry$).pipe(map(normalizeTarget))
}

export function buildTasks(ei: EngineInput) {
  const preloadTasks$ = toTaskStream(ei.preloadRequests$, ei.registry$)
  // const deleteTasks$ = toTaskStream(ei.deleteRequests$, ei.registry$)
  // const revalidateTasks$ = toTaskStream(ei.revalidateRequests$, ei.registry$)
  return {
    preloadTasks$,
    // deleteTasks$,
    // revalidateTasks$,
  }
}
