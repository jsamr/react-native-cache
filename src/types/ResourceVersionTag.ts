/**
 * @public
 */
export interface ResourceVersionTag {
  type: 'ETag' | 'LastModified'
  value: string
}
