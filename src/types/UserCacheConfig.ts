import { BaseCacheConfig } from './BaseCacheConfig'
import { RequiredCacheConfig } from './RequiredCacheConfig'

/**
 * @public
 */
export type UserCacheConfig = Partial<BaseCacheConfig> & RequiredCacheConfig
