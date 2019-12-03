import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamResponsiveComponent } from './exam-responsive/exam-responsive.component';
import { ExamComponent } from './exam/exam.component';
import { ExamAvatarComponent } from './exam-avatar/exam-avatar.component';
import { ExamHttpclientComponent } from './exam-httpclient/exam-httpclient.component';


const routes: Routes = [
  { path: '', component: ExamResponsiveComponent },
  { path: 'exams', component: ExamComponent },
  { path: 'exam-avatar', component: ExamAvatarComponent },
  { path: 'exam-httpclient', component: ExamHttpclientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
