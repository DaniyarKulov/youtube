export interface ResponseApiTypes {
  kind: string;
  etag: string;
  pageInfo: PageInfoResult;
  items: [Items];
}

export interface PageInfoResult {
  totalResults: number;
  resultsPerPage: number;
}

export interface Items {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetInfo;
  statistics: StatisticsCount;
}

export interface SnippetInfo {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: UrlWidthHeight;
    medium: UrlWidthHeight;
    high: UrlWidthHeight;
    standard: UrlWidthHeight;
    maxres: UrlWidthHeight;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

export interface StatisticsCount {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface UrlWidthHeight {
  url: string;
  width: number;
  height: number;
}

export interface KindEtag {
  kind: string;
  etag: string;
  id?: string;
}
