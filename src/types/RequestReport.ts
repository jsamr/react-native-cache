import { ResourceVersionTag } from './ResourceVersionTag'

/**
 * @public
 */
export interface RequestReport<MetaInfo = any> {
  uri: string
  expires: number
  error: Error | null
  versionTag: ResourceVersionTag | null
  localFileName: string
  metaInfo: MetaInfo
}
