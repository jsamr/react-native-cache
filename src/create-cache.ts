import { ComponentType } from 'react'
import { constVoid } from 'fp-ts/es6/function'
import { UserCacheConfig } from './types/UserCacheConfig'
import { BaseCacheConfig } from './types/BaseCacheConfig'
import { CacheConfig } from './types/CacheConfig'
import { CacheHandle } from './types/CacheHandle'
import { TargetResource } from './types/TargetResource'
import { ResourceHandle } from './types/ResourceHandle'
import { ResourceCacheInfo } from './types/ResourceCacheInfo'

const defaultCacheConfig: BaseCacheConfig = {
  debug: __DEV__,
  defaultMaxAge: 86000,
  autoRemoveStaleResources: false,
  maxParallelDownloads: 10,
  maxAttemptsBeforeAbort: 3,
  sleepBetweenAttempts: 400,
  resourceMetaInfoExtractor: constVoid as any,
}

interface Cache {
  Provider: ComponentType<{}>
  /**
   * React Hook to perform operations on cache.
   *
   * @returns A constant {@link CacheHandle} which will never trigger re-renderings.
   */
  useCacheHandle: () => CacheHandle
  /**
   * React Hook to operate on a resource.
   *
   * @param resource - The resource to operate on. It doesn't need to be registered. Equality is computed with uri.
   * @returns A {@link ResourceHandle} which changes when resource's URI changes.
   */
  useResourceHandle: (resource: TargetResource) => ResourceHandle
  /**
   * React Hook to handle resource state changes.
   *
   * @param resource - The resource to listen. It doesn't need to be registered. Equality is computed with uri.
   * @returns An object describing the state of the resource in the cache.
   */
  useResourceInfo: (resource: TargetResource) => ResourceCacheInfo
}

/**
 *
 * @param config
 *
 * @example
 *
 * ```js
 * const cache = createCache({})
 * ```
 */
export function createCache(config: UserCacheConfig): Cache {
  const cache: CacheConfig = { ...defaultCacheConfig, ...config }
  return (cache as unknown) as any
  // const handle: CacheHandle = {
  //   //
  // }
  // const cacheContext = createContext(handle)
  // return cache
}
