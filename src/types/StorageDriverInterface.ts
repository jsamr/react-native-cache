import { URICacheRegistry } from './URICacheRegistry'

/**
 * @public
 */
export interface StorageDriverInterface {
  load(): Promise<URICacheRegistry | null>
  save(registry: URICacheRegistry): Promise<void>
  clear(): Promise<void>
}
