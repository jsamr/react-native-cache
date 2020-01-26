import { ResourceVersionTag } from './ResourceVersionTag'

/**
 * @public
 */
export interface ResourceCacheInfoBase {
  uri: string
  registered: boolean
}

/**
 * @public
 */
export interface UnregisteredResourceCacheInfo extends ResourceCacheInfoBase {
  registered: false
}

/**
 * @public
 */
export interface RegisteredResourceCacheInfo<MetaInfoShape = any> extends ResourceCacheInfoBase {
  registered: true
  localFileName: string
  versionTag: ResourceVersionTag | null
  mimeType: string
  metaInfo: MetaInfoShape | null
}

/**
 * @public
 */
export type ResourceCacheInfo<MetaInfoShape = any> =
  | RegisteredResourceCacheInfo<MetaInfoShape>
  | UnregisteredResourceCacheInfo
