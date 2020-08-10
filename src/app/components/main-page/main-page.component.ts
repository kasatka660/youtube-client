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
  dateAscending: boolean = null;
  viewsAscending: boolean = null;

  constructor() { }

  public ngOnInit(): void {
  }

  updateVideoList(e: boolean) {
    this.videoList = e ?  data.items : [];
  }

  sortByCriteria(criteria) {
    if (this.videoList.length) {
      criteria === 'date' ? this.sortByDate() : this.sortByViews();
    }
  }

  sortByDate() {
    this.dateAscending = !this.dateAscending;
    if (this.dateAscending) {
      this.videoList.sort((a, b) =>
        ( new Date(a.snippet.publishedAt).getTime() -  new Date(b.snippet.publishedAt).getTime()) );
    } else {
      this.videoList.sort((b, a) =>
        ( new Date(a.snippet.publishedAt).getTime() -  new Date(b.snippet.publishedAt).getTime()) );
    }
  }

  sortByViews() {
    this.viewsAscending = !this.viewsAscending;
    if (this.viewsAscending) {
      this.videoList.sort((a, b) =>
        (Number(a.statistics.viewCount) - Number(b.statistics.viewCount)) );
    } else {
      this.videoList.sort((b, a) =>
        (Number(a.statistics.viewCount) - Number(b.statistics.viewCount)) );
    }
  }

}
