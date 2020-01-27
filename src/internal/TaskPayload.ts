import { ResourceDefinition } from '../types/ResourceDefinition'
import { ResourceCacheInfo } from '../types/ResourceCacheInfo'
import { TaskType } from './TaskType'

export interface TaskPayload {
  type: TaskType
  resource: ResourceDefinition
  info: ResourceCacheInfo
}
