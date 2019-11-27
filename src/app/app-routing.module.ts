import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamResponsiveComponent } from './exam-responsive/exam-responsive.component';


const routes: Routes = [
  { path: '', component: ExamResponsiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
