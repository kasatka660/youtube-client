import {VideoThumbnails} from './video-thumbnails';
import {VideoLocalizedInfo} from './video-localized-info';

export interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: VideoThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: VideoLocalizedInfo;
  defaultAudioLanguage: string;
}
