import {Component, Input, OnInit} from '@angular/core';
import {data} from '../../data/data';
import {VideoItem} from '../../models/video-item';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public videoList: VideoItem[] = [];
  public dateAscending: boolean = null;
  public viewsAscending: boolean = null;
  @Input() public filterKeyword: string = '';

  constructor() { }

  public ngOnInit(): void {
  }

  public updateVideoList(e: boolean): void {
    this.videoList = e ?  data.items : [];
  }

  public sortByCriteria(criteria: string): void {
    if (this.videoList.length) {
      criteria === 'date' ? this.sortByDate() : this.sortByViews();
    }
  }

  public sortByDate(): void {
    this.dateAscending = !this.dateAscending;
    if (this.dateAscending) {
      this.videoList.sort((a, b) =>
        ( new Date(a.snippet.publishedAt).getTime() -  new Date(b.snippet.publishedAt).getTime()) );
    } else {
      this.videoList.sort((b, a) =>
        ( new Date(a.snippet.publishedAt).getTime() -  new Date(b.snippet.publishedAt).getTime()) );
    }
  }

  public sortByViews(): void {
    this.viewsAscending = !this.viewsAscending;
    if (this.viewsAscending) {
      this.videoList.sort((a, b) =>
        (Number(a.statistics.viewCount) - Number(b.statistics.viewCount)) );
    } else {
      this.videoList.sort((b, a) =>
        (Number(a.statistics.viewCount) - Number(b.statistics.viewCount)) );
    }
  }

  public filterByKeyword(keyword: string): void {
    if (this.videoList.length) {
      this.filterKeyword = keyword;
    }
  }

}
