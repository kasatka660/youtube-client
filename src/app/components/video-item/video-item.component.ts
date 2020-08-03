import {Component, Input, OnInit} from '@angular/core';
import {VideoItem} from '../../models/video-item';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {
  @Input() public video: VideoItem;

  constructor() { }

  public ngOnInit(): void {
  }

}
