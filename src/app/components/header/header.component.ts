import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public videosUpdate: EventEmitter<boolean> = new EventEmitter(false);
  @Output() public sortingEvent: EventEmitter<string> = new EventEmitter();
  @Output() public filterEvent: EventEmitter<string> = new EventEmitter();
  public sortSettingsHidden: boolean = true;

  constructor() { }

  public ngOnInit(): void {
  }

  public expandSortSettings(value: boolean): void {
    this.sortSettingsHidden = value;
  }

  public updateVideos(e: boolean): void {
    this.videosUpdate.emit(e);
  }

  public sortByCriteria(criteria) {
    this.sortingEvent.emit(criteria);
  }

  public filterByKeyword(keyword) {
    this.filterEvent.emit(keyword);
  }


}
