import { ResourceDefinition } from '../types/ResourceDefinition'
import { TaskType } from './TaskType'

export interface RequestDefinition {
  type: TaskType
  resource: ResourceDefinition
}
