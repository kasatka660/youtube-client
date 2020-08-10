import {Component, OnInit} from '@angular/core';
import {data} from '../../data/data';
import {VideoItem} from "../../models/video-item";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public videoList: VideoItem[] = [];
  constructor() { }

  public ngOnInit(): void {
  }

  updateVideoList(e: boolean) {
    this.videoList = e ?  data.items : [];
  }

}
