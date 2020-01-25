import { FileSystemDriverInterface } from './FileSystemDriverInterface'

/**
 * @public
 */
export type FileSystemDriverClass = new (storeName: string) => FileSystemDriverInterface
