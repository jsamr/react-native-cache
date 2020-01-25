/**
 * @public
 */
export interface FileSystemDriverInterface {
  nodeExists: (nodeURI: string) => Promise<boolean>
  delete: (nodeURI: string) => Promise<void>
  copy: (sourceURI: string, destinationURI: string) => Promise<void>
  move: (sourceURI: string, destinationURI: string) => Promise<void>
  makeDirectory: (nodeURI: string) => Promise<void>
  getBaseDirURI: () => string
}
