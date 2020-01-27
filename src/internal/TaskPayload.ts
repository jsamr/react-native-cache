import { ResourceDefinition } from '../types/ResourceDefinition'
import { ResourceCacheInfo } from '../types/ResourceCacheInfo'

export interface TaskPayload {
  resource: ResourceDefinition
  info: ResourceCacheInfo
}
