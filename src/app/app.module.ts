import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { CareerObjectivePageComponent } from './components/pages/career-objective-page/career-objective-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CareerObjectiveNewComponent } from './components/pages/career-objective-new/career-objective-new.component';
import { CareerObjectiveEditComponent } from './components/pages/career-objective-edit/career-objective-edit.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { HomeComponent } from './components/pages/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CareerObjectivePageComponent,
    CareerObjectiveNewComponent,
    CareerObjectiveEditComponent,
    LoginPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
