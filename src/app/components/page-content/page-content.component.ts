import {Component, Input, OnInit} from '@angular/core';
import {VideoItem} from "../../models/video-item";

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {

  @Input() videoList: VideoItem[] = [];
  constructor() { }

  public ngOnInit(): void {
  }

}
