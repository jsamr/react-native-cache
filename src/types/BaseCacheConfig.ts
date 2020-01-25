/**
 * @public
 */
export interface BaseCacheConfig {
  /**
   * Log events to the console
   *
   * @defaultValue `__DEV__`
   */
  debug: boolean
  /**
   *
   * This value will be used when no `Cache-control: max-age` directive or `Expires` header have been given in the response.
   * `Infinity` can be used to denote an **immutable**, never-expiring resource default policy.
   *
   * @remarks `max-age` is a cache control directive specifying the duration, in seconds, during which resources are considered fresh.
   *
   * @defaultValue `84000` s (1 day)
   */
  defaultMaxAge: number
  /**
   * Maximum of download retry after encountering failures.
   *
   * @defaultValue `3`
   */
  maxAttemptsBeforeAbort: number
  /**
   * Duration in milliseconds to wait before a new attempt after failure.
   *
   * @defaultValue `400` ms
   */
  sleepBetweenAttempts: number
  /**
   * This value will override any `Cache-control: max-age` directive or `Expires` header in the response.
   * `Infinity` can be used to denote an **immutable**, never-expire policy.
   *
   * @remarks `max-age` is a cache control directive specifying the duration, in seconds, during which resources are considered fresh.
   *
   * @defaultValue `undefined` (don't override)
   */
  overrideMaxAge?: number
  /**
   * When this option is set to `true`, the store will automatically remove stale (expired)
   * resources on mount.
   *
   * @defaultValue `false`
   */
  autoRemoveStaleResources: boolean
  /**
   * The maximum number of parallel downloads at a time.
   * This is a balance between operation speed and I/O bottlenecks.
   *
   * @defaultValue `10`
   */
  maxParallelDownloads: number
  /**
   * You can store meta-info such as Size from headers.
   *
   * @defaultValue `() => void`, a function returning nothing
   */
  resourceMetaInfoExtractor: <T>(headers: Headers) => T
}
