import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  public searchForm: FormGroup = new FormGroup({
                               valueToSearch: new FormControl('')
                             });
  constructor() { }

  public ngOnInit(): void {
  }

  public resetSearch(): void {
    this.searchForm.setValue({valueToSearch: ''});

  }

  public onSubmit(): void {

  }

}
