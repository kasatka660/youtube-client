import {VideoSnippet} from './video-snippet';
import {VideoStatistics} from './video-statistics';

export interface VideoItem {
  kind: string;
  etag: string;
  id: string;
  snippet: VideoSnippet;
  statistics: VideoStatistics;
}
