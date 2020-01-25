import { StorageDriverInterface } from './StorageDriverInterface'

/**
 * @public
 */
export type StorageDriverClass<C extends StorageDriverInterface = StorageDriverInterface> = new (name: string) => C
