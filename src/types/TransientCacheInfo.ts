export interface TransientCacheInfo {
  expired: boolean
  fetching: boolean
  fileExists: boolean
  error: Error | null
}
