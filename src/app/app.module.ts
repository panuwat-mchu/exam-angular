import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamResponsiveComponent } from './exam-responsive/exam-responsive.component';
import { ExamComponent } from './exam/exam.component';
import { ExamAvatarComponent } from './exam-avatar/exam-avatar.component';
import { ExamHttpclientComponent } from './exam-httpclient/exam-httpclient.component';


@NgModule({
  declarations: [
    AppComponent,
    ExamResponsiveComponent,
    ExamComponent,
    ExamAvatarComponent,
    ExamHttpclientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
