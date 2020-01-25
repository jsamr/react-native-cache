import { ResourceCacheEvent } from './ResourceCacheEvent'

/**
 * @public
 */
export type ProgressCallback = (event: ResourceCacheEvent, currentIndex: number, total: number) => void
