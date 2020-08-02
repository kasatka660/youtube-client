import {VideoThumbnailOptions} from './video-thumbnail-options';

export interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: VideoThumbnailOptions;
}
