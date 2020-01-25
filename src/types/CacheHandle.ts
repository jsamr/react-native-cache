import { TargetResource } from './TargetResource'
import { ResourceCacheEvent } from './ResourceCacheEvent'
import { ProgressCallback } from './ProgressCallback'
import { ResourceCacheInfo } from './ResourceCacheInfo'

/**
 * An object used to perform actions over the cache.
 *
 * @public
 */
export interface CacheHandle {
  /**
   * **Asynchronously** preload the provided resource into the Cache.
   *
   * @remarks This function will revalidate a resource which has already been preloaded, and download unconditionnaly otherwise.
   *
   * @param resource - The resource to preload.
   * @returns A Promise resolving to the next event.
   */
  preloadResourceAsync(resource: TargetResource): Promise<ResourceCacheEvent>

  /**
   * **Asynchronously** and parallely preload a list of resources into the Cache.
   *
   * @remarks
   *
   * - This function will revalidate resources which are already preloaded, and download the others.
   * - The maximum number of paralel downloads is determined by {@link BaseCacheConfig#maxParallelDownloads}
   *
   * @param resources - The resources to preload.
   * @param onProgress - A callback to be invoked after each preloading.
   * @returns A Promise resolving to a list of events related to each preloading.
   */
  preloadResourcesAsync(resources: TargetResource[], onProgress?: ProgressCallback): Promise<ResourceCacheEvent[]>

  /**
   * **Asynchronously** delete an existing image from the Cache.
   * Does nothing if the provided resource have no matching entry in registry.
   *
   * @param resource - The resource to delete.
   */
  deleteResourceAsync(resource: TargetResource): Promise<ResourceCacheEvent>

  /**
   * **Asynchronously** delete all resources from the Cache.
   *
   * @param onProgress - A callback to be invoked after each deletion.
   */
  deleteAllResourcesAsync(onProgress?: ProgressCallback): Promise<ResourceCacheEvent[]>

  /**
   * **Asynchronously** delete all image which are stale from the Cache.
   *
   * @param onProgress - A callback to be invoked after each deletion.
   */
  deleteAllStaleResourcesAsync(onProgress?: ProgressCallback): Promise<ResourceCacheEvent[]>

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
   * @param resource - The resource to revalidate.
   * @returns A Promise resolving to the next event.
   */
  revalidateResourceAsync(resource: TargetResource): Promise<ResourceCacheEvent>

  /**
   * **Asynchronously** revalidate all images *which were previously registered*.
   *
   * @remarks Revalidation is done with:
   *
   * - file existence checking;
   * - conditionnal HTTP requests, with `If-None-Match` or `If-Modified-Since` headers.
   *
   * **Warning** This method does nothing on a resource which has not been registered,
   * i.e. to which `preload` has not been called at least once.
   *
   * @param onProgress - A callback to be invoked after each revalidation
   * @returns A Promise resolving to a list of events related to each revalidation.
   */
  revalidateAllResourcesAsync(onProgress?: ProgressCallback): Promise<ResourceCacheEvent[]>

  /**
   * **Asynchronously** revalidate all stale images in the store.
   *
   * @remarks Revalidation is done with:
   *
   * - file existence checking;
   * - conditionnal HTTP requests, with `If-None-Match` or `If-Modified-Since` headers.
   *
   * @param onProgress - A callback to be invoked after each revalidation
   * @returns A Promise resolving to a list of events related to each revalidation.
   */
  revalidateAllStaleResources(onProgress?: ProgressCallback): Promise<ResourceCacheEvent[]>

  /**
   *
   * @param resource - The ressource to lookup.
   * @returns An object describing the cache state of a resource.
   */
  getResourceInfo(resource: TargetResource): ResourceCacheInfo
}
