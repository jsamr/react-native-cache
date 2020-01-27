import { Observable } from 'rxjs'
import { TargetResource } from '../types/TargetResource'
import { ResourceCacheRegistry } from '../types/ResourceCacheRegistry'
import { Environment } from './Environment'

export interface EngineInput {
  registry$: Observable<ResourceCacheRegistry>
  environment$: Observable<Environment>
  preloadRequests$: Observable<TargetResource>
  // deleteRequests$: Observable<TargetResource>
  // revalidateRequests$: Observable<TargetResource>
}
