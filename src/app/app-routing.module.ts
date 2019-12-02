import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamResponsiveComponent } from './exam-responsive/exam-responsive.component';
import { ExamComponent } from './exam/exam.component';
import { ExamAvatarComponent } from './exam-avatar/exam-avatar.component';


const routes: Routes = [
  { path: '', component: ExamResponsiveComponent },
  { path: 'exams', component: ExamComponent },
  { path: 'exam-avatar', component: ExamAvatarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
