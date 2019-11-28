import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamResponsiveComponent } from './exam-responsive/exam-responsive.component';
import { ExamComponent } from './exam/exam.component';


const routes: Routes = [
  { path: '', component: ExamResponsiveComponent },
  { path: 'exams', component: ExamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
