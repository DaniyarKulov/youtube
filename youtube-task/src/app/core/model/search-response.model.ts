export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: ResponseItem[];
}
export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
export interface ResponseId {
  kind: string;
  videoId: string;
}
export interface ResponseItem {
  etag: string;
  id: ResponseId;
  kind: string;
}
