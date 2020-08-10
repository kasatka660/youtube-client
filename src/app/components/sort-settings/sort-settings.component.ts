import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sort-settings',
  templateUrl: './sort-settings.component.html',
  styleUrls: ['./sort-settings.component.scss']
})
export class SortSettingsComponent implements OnInit {

  @Input() public sortSettingsHidden: boolean;
  dateAscending: boolean = null;
  viewsAscending: boolean = null;
  @Output() sortingEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  public sortBy(criteria: string): void {
    if (criteria === 'date') {
      this.dateAscending = !this.dateAscending;
      this.sortingEvent.emit(criteria);
    }
    if (criteria === 'views') {
      this.viewsAscending = !this.viewsAscending;
      this.sortingEvent.emit(criteria);
    }
  }

}
