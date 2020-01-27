import { Observable } from 'rxjs'
import { ResourceCacheRegistry } from '../types/ResourceCacheRegistry'
import { Environment } from './Environment'
import { RequestDefinition } from './RequestDefinition'

export interface EngineInput {
  registry$: Observable<ResourceCacheRegistry>
  environment$: Observable<Environment>
  requests$: Observable<RequestDefinition>
}
