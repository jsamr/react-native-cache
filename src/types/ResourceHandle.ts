import { ResourceCacheEvent } from './ResourceCacheEvent'
import { ResourceCacheInfo } from './ResourceCacheInfo'

/**
 * @public
 */
export interface ResourceHandle {
  /**
   * **Asynchronously** preload the provided resource into the Cache.
   *
   * @remarks This function will revalidate a resource which has already been preloaded, and download unconditionnaly otherwise.
   *
   * @returns A Promise resolving to the next event.
   */
  preloadAsync(): Promise<ResourceCacheEvent>

  /**
   * **Asynchronously** revalidate a stored resource *if previously registered*.
   *
   * @remarks Revalidation is done with:
   *
   * - file existence checking;
   * - conditionnal HTTP requests, with `If-None-Match` or `If-Modified-Since` headers.
   *
   * **Warning** This method does nothing on a resource which has not been registered,
   * i.e. to which `preload` has not been called at least once.
   *
   * @returns A Promise resolving to the next event.
   */
  revalidateAsync(): Promise<ResourceCacheEvent>

  /**
   * **Asynchronously** delete an existing image from the Cache.
   * Does nothing if the provided resource have no matching entry in registry.
   *
   */
  deleteAsync(): Promise<ResourceCacheEvent>

  /**
   *
   * @returns An object describing the cache state of a resource.
   */
  getInfo<MetaInfoShape = any>(): ResourceCacheInfo<MetaInfoShape>
}
