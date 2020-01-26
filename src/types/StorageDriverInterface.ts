import { ResourceCacheRegistry } from './ResourceCacheRegistry'

/**
 * @public
 */
export interface StorageDriverInterface {
  load(defaultRegistry: ResourceCacheRegistry): Promise<ResourceCacheRegistry>
  save(registry: ResourceCacheRegistry): Promise<void>
  clear(): Promise<void>
}
