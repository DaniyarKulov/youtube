export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetInfo;
  statistics: StatisticsCount;
}

export interface SnippetInfo {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thubnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: LocalizedTitle;
  defaultAudioLanguage: string;
}

export interface Thubnails {
  default: UrlImg;
  medium: UrlImg;
  high: UrlImg;
  standard: UrlImg;
  maxres: UrlImg;
}
export interface LocalizedTitle {
  title: string;
  description: string;
}
export interface StatisticsCount {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface UrlImg {
  url: string;
  width: number;
  height: number;
}
