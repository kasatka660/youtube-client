import {VideoItem} from './video-item';

export interface YoutubeResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  };
  items: VideoItem[];
}
