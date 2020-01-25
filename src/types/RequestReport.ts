import { ResourceVersionTag } from './ResourceVersionTag'

/**
 * @public
 */
export interface RequestReport<T = any> {
  uri: string
  expires: number
  error: Error | null
  versionTag: ResourceVersionTag | null
  localFileName: string
  metaInfo: T
}
