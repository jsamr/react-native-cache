import { ResourceDefinition } from './ResourceDefinition'
import { RequestReport } from './RequestReport'
import { ResourceVersionTag } from './ResourceVersionTag'

/**
 * @public
 */
export interface ResourceManagerInterface {
  saveResource({ uri, headers: userHeaders }: ResourceDefinition): Promise<RequestReport>
  revalidateResource({ uri, headers }: ResourceDefinition, versionTag: ResourceVersionTag): Promise<RequestReport>
  resourceExists({ uri }: ResourceDefinition): Promise<boolean>
  deleteResource(src: ResourceDefinition): Promise<void>
  createBaseDirIfMissing(): Promise<void>
  deleteBaseDirIfExists(): Promise<void>
}
