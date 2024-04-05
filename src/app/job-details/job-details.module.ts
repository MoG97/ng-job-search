import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailsComponent } from './job-details.component';


const routes: Routes = [
  { path: '', component: JobDetailsComponent }
];

@NgModule({
  declarations: [
    JobDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JobDetailsModule { }
