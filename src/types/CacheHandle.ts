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
  preloadResourcesBatchAsync(resources: TargetResource[], onProgress?: ProgressCallback): Promise<ResourceCacheEvent[]>

  /**
   * **Asynchronously** delete an existing resource from the Cache.
   * Does nothing if the provided resource have no matching entry in registry.
   *
   * @param resource - The resource to delete.
   */
  deleteResourceAsync(resource: TargetResource): Promise<ResourceCacheEvent>

  /**
   * **Asynchronously** and parallely delete provided cached resources.
   *
   * @param resources - The resources to delete.
   * @param onProgress - A callback to be invoked after each deletion.
   */
  deleteResourcesBatchAsync(onProgress?: ProgressCallback): Promise<ResourceCacheEvent[]>

  /**
   * **Asynchronously** and parallely delete all resources from the Cache.
   *
   * @param onProgress - A callback to be invoked after each deletion.
   */
  deleteAllResourcesAsync(onProgress?: ProgressCallback): Promise<ResourceCacheEvent[]>

  /**
   * **Asynchronously** and parallely delete all resources which are stale from the Cache.
   *
   * @param onProgress - A callback to be invoked after each deletion.
   */
  deleteAllStaleResourcesAsync(onProgress?: ProgressCallback): Promise<ResourceCacheEvent[]>

  /**
   * **Asynchronously** revalidate a cached resource *if previously registered*.
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
   * **Asynchronously** and parallely revalidate provided cached resources *if previously registered*.
   *
   * @remarks Revalidation is done with:
   *
   * - file existence checking;
   * - conditionnal HTTP requests, with `If-None-Match` or `If-Modified-Since` headers.
   *
   * @param resources - The resources to revalidate.
   * @param onProgress - A callback to be invoked after each revalidation.
   */
  revalidateResourcesBatchAsync(
    resources: TargetResource[],
    onProgress?: ProgressCallback,
  ): Promise<ResourceCacheEvent[]>

  /**
   * **Asynchronously** revalidate all resources *which were previously registered*.
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
   * **Asynchronously** revalidate all stale resources in the store.
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
  getResourceInfo<MetaInfoShape = any>(resource: TargetResource): ResourceCacheInfo<MetaInfoShape>
}
