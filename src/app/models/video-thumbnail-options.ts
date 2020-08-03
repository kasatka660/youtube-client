import {VideoThumbnail} from './video-thumbnail';
import {ThumbnailTypes} from '../enums/thumbnail-types.enum';

type ThumbnailKeyFields = {[key in ThumbnailTypes]: string};

export interface VideoThumbnailOptions extends ThumbnailKeyFields {
  key: VideoThumbnail;
}
