import { URIVersionTag } from './URIVersionTag'
import { HTTPHeaders } from './HTTPHeaders'

/**
 * @public
 */
export interface URICacheModel<T = any> {
  uri: string
  headers?: HTTPHeaders
  registered: boolean
  fileExists: boolean
  expired: boolean
  fetching: boolean
  localFileName: string
  versionTag: URIVersionTag | null
  error: Error | null
  metaInfo: T | null
}
