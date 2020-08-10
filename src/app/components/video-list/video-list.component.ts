import {Component, Input, OnInit} from '@angular/core';
import {VideoItem} from '../../models/video-item';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  @Input() public filterKeyword: string = '';
  @Input() public videoList: VideoItem[] = [];
  constructor() { }

  public ngOnInit(): void {
  }

}
