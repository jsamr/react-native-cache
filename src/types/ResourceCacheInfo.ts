import { ResourceVersionTag } from './ResourceVersionTag'
import { HTTPHeaders } from './HTTPHeaders'

/**
 * @public
 */
export interface ResourceCacheInfo<T = any> {
  uri: string
  headers?: HTTPHeaders
  registered: boolean
  fileExists: boolean
  expired: boolean
  fetching: boolean
  localFileName: string
  versionTag: ResourceVersionTag | null
  error: Error | null
  mimeType: string
  metaInfo: T | null
}