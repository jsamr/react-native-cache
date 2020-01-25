import { DownloadReport } from './DownloadReport'

/**
 * @public
 */
export interface DownloadManagerInterface {
  /**
   * Download resource to local URI.
   *
   * @throws Any exception thrown by this function WILL be cought by the {@link ResourceManagerInterface}.
   *
   * @param remoteURI - The remote resource.
   * @param localURI - The target local URI. The URI scheme WILL be `file://`.
   * @param headers - A map of headers that MUST be provided with the download request.
   *
   * @public
   */
  downloadImage(remoteURI: string, localURI: string, headers: Record<string, string>): Promise<DownloadReport>
}
