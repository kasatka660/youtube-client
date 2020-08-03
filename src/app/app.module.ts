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
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { SortSettingsComponent } from './components/sort-settings/sort-settings.component';

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
    SearchFiltersComponent,
    SortSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
