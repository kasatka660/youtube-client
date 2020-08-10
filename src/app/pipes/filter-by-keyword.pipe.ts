import { Pipe, PipeTransform } from '@angular/core';
import {VideoItem} from '../models/video-item';

@Pipe({
  name: 'filterByKeyWord'
})
export class FilterByKeywordPipe implements PipeTransform {

  public transform(videoList: VideoItem[], keyword: string): VideoItem[] {
    return videoList.filter(videoItem =>
      videoItem.snippet.title.includes(keyword.trim())
      || videoItem.snippet.description.includes(keyword.trim()) );
  }
}
