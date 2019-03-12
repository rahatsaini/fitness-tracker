import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training/training.component';
import { CurrenttrainingComponent } from './training/currenttraining/currenttraining.component';
import { NewtrainingComponent } from './training/newtraining/newtraining.component';
import { PasttrainingComponent } from './training/pasttraining/pasttraining.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import {StopTrainingComponent} from './training/currenttraining/stoptraining.component';
import { AuthServce } from './auth/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrenttrainingComponent,
    NewtrainingComponent,
    PasttrainingComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [AuthServce],
  bootstrap: [AppComponent],
  entryComponents : [StopTrainingComponent]
})
export class AppModule { }
