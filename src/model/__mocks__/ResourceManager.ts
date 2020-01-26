import { ResourceManagerInterface } from '../../types/ResourceManagerInterface'
import { ResourceDefinition } from '../../types/ResourceDefinition'
import { RequestReport } from '../../types/RequestReport'

export class ResourceManager implements ResourceManagerInterface {
  async saveResource({ uri }: ResourceDefinition): Promise<RequestReport<any>> {
    return {
      error: null,
      expires: 0,
      localFileName: '',
      metaInfo: {},
      uri,
      versionTag: null,
    }
  }
  async revalidateResource({ uri }: ResourceDefinition): Promise<RequestReport<any>> {
    return {
      error: null,
      expires: 0,
      localFileName: '',
      metaInfo: {},
      uri,
      versionTag: null,
    }
  }
  async resourceExists({}: ResourceDefinition): Promise<boolean> {
    return true
  }
  async deleteResource({}: ResourceDefinition): Promise<void> {
    //
  }
  async createBaseDirIfMissing(): Promise<void> {
    //
  }
  async deleteBaseDirIfExists(): Promise<void> {
    //
  }
}
