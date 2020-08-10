import { Pipe, PipeTransform } from '@angular/core';
import {VideoItem} from '../models/video-item';

@Pipe({
  name: 'filterByKeyWord'
})
export class FilterByKeywordPipe implements PipeTransform {

  public transform(videoList: VideoItem[], string): VideoItem[] {
    return videoList.filter(videoItem =>
      videoItem.snippet.title.includes(string.trim()) || videoItem.snippet.description.includes(string.trim()) );
  }
}
