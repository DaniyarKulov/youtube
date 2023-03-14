export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thubnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

export interface Thubnails {
  default: Thubnail;
  medium: Thubnail;
  high: Thubnail;
  standard: Thubnail;
  maxres: Thubnail;
}
export interface Localized {
  title: string;
  description: string;
}
export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface Thubnail {
  url: string;
  width: number;
  height: number;
}
