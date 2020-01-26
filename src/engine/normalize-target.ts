import { TargetResource } from '../types/TargetResource'
import { ResourceDefinition } from '../types/ResourceDefinition'

export function normalizeTarget(resource: TargetResource): ResourceDefinition {
  return typeof resource === 'string' ? { uri: resource } : resource
}
