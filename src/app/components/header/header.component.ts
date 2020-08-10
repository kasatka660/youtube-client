import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() videosUpdate: EventEmitter<boolean> = new EventEmitter(false);
  public sortSettingsHidden: boolean = true;

  constructor() { }

  public ngOnInit(): void {
  }

  public expandSortSettings(value: boolean): void {
    this.sortSettingsHidden = value;
  }

  public updateVideos(e: boolean) {
    this.videosUpdate.emit(e);
  }

}
