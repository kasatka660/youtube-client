import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sort-settings',
  templateUrl: './sort-settings.component.html',
  styleUrls: ['./sort-settings.component.scss']
})
export class SortSettingsComponent implements OnInit {

  @Input() public sortSettingsHidden: boolean;
  constructor() { }

  public ngOnInit(): void {
  }

}
