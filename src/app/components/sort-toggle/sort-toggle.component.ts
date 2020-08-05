import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sort-toggle',
  templateUrl: './sort-toggle.component.html',
  styleUrls: ['./sort-toggle.component.scss']
})
export class SortToggleComponent implements OnInit {

  private sortSettingsHidden: boolean = true;
  @Output() private expandSortSettings: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public ngOnInit(): void {
  }

  public onToggleBtnClick(event: Event): void {
    this.sortSettingsHidden = !this.sortSettingsHidden;
    this.expandSortSettings.emit(this.sortSettingsHidden);
  }

}
