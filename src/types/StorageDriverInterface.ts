import { ResourceCacheRegistry } from './ResourceCacheRegistry'

/**
 * @public
 */
export interface StorageDriverInterface {
  load(): Promise<ResourceCacheRegistry | null>
  save(registry: ResourceCacheRegistry): Promise<void>
  clear(): Promise<void>
}
