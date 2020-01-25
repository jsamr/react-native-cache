import { ResourceCacheInfo } from './ResourceCacheInfo'

/**
 * @public
 */
export interface ResourceCacheRegistry {
  [uri: string]: ResourceCacheInfo
}
