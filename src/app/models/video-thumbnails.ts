// import {ThumbnailTypes} from '../enums/thumbnail-types.enum';
import {VideoThumbnailOption} from './video-thumbnail-option';

// export type VideoThumbnails = {[key in ThumbnailTypes]: VideoThumbnailOption};

export interface VideoThumbnails {
  [key: string]: VideoThumbnailOption;
}
