import { StorageDriverInterface } from './StorageDriverInterface'

/**
 * @public
 */
export type StorageDriverClass = new (name: string) => StorageDriverInterface
