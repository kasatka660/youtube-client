import { Component, OnInit } from '@angular/core';
import {VideoItem} from '../../models/video-item';
import {data} from '../../data/data';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  public videoList: VideoItem[];

  constructor() { }

  public ngOnInit(): void {
    this.videoList = data.items;
  }

}
