import { URIVersionTag } from './URIVersionTag'

/**
 * @public
 */
export interface RequestReport<T = any> {
  uri: string
  expires: number
  error: Error | null
  versionTag: URIVersionTag | null
  localFileName: string
  metaInfo: T
}
