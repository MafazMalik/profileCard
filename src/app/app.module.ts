import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './first-project-component/header/header.component';
import { BackgroundSectionComponent } from './first-project-component/background-section/background-section.component';
import { ProfileImgComponent } from './first-project-component/profile-img/profile-img.component';
import { ProfileNameComponent } from './first-project-component/profile-name/profile-name.component';
import { BodyContentComponent } from './first-project-component/body-content/body-content.component';
import { RowImgComponent } from './first-project-component/row-img/row-img.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundSectionComponent,
    ProfileImgComponent,
    ProfileNameComponent,
    BodyContentComponent,
    RowImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
