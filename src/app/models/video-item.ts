import {VideoSnippet} from "./video-snippet";
import {VideoStatistics} from "./video-statistics";
import {VideoLocalizedInfo} from "./video-localized-info";

export interface VideoItem {
  kind: string,
  etag: string,
  id: string,
  snippet: VideoSnippet,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  localized: VideoLocalizedInfo,
  defaultAudioLanguage: string,
  statistics: VideoStatistics,
}
