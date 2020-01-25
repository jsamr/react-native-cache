import { HTTPHeaders } from './HTTPHeaders'

/**
 * @public
 */
export interface ResourceDefinition {
  uri: string
  headers?: HTTPHeaders
}
