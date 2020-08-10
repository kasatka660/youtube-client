import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { SortSettingsComponent } from './components/sort-settings/sort-settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LogoComponent } from './components/logo/logo.component';
import { SortToggleComponent } from './components/sort-toggle/sort-toggle.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { VideoDateStatusDirective } from './directives/video-date-status.directive';
import {FilterByKeywordPipe} from './pipes/filter-by-keyword.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BigNumberPipe } from './pipes/big-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoListComponent,
    VideoItemComponent,
    PageContentComponent,
    MainPageComponent,
    SearchFormComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    AuthorizationComponent,
    SortSettingsComponent,
    LogoComponent,
    SortToggleComponent,
    VideoDateStatusDirective,
    FilterByKeywordPipe,
    BigNumberPipe
  ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              BrowserAnimationsModule,
              MatInputModule,
              FormsModule,
              MatIconModule,
              MatButtonModule,
              ReactiveFormsModule,
              MatCardModule,
              MatButtonToggleModule,
              FontAwesomeModule
            ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
