import { DownloadManagerClass } from './DownloadManagerClass'
import { FileSystemDriverClass } from './FileSystemDriverClass'
import { StorageDriverClass } from './StorageDriverClass'

/**
 * @public
 */
export interface RequiredCacheConfig {
  /**
   * A `class` which produces `DownloadManagerInterface` instances.
   * This manager is used to download resource files.
   *
   * @remarks
   * You can implement this class using `fetch` API. To use it on Android, you must configure your
   * `AndroidManifest.xml`. See instructions here: {@link https://git.io/JeWlk | Libraries/Blob/URL.js#L29}.
   *
   * You can also use expo's `FileSystem.downloadAsync` or `RNFB.config().fetch()` (rn-fetch-blob).
   */
  DownloadManager: DownloadManagerClass
  /**
   * A `class` which produces `FileSystemDriverInterface` instances.
   * This driver is used to move resource files through URIs.
   */
  FileSystemDriver: FileSystemDriverClass
  /**
   * A `class` which produces `StorageDriverInterface` instances.
   * This driver is used to persist a file registry.
   *
   * @see StorageDriverInterface
   * @see StorageDriverClass
   * @see URICacheRegistry
   *
   */
  StorageDriver: StorageDriverClass<any>
}
