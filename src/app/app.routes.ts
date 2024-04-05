import { Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { FavouritesComponent } from './favourites/favourites.component';

export const routes: Routes = [
  { path: 'jobs', component: JobsComponent, },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'job-details/:id', loadChildren: () => import('./job-details/job-details.module').then(m => m.JobDetailsModule) },
  { path: '**', redirectTo: 'jobs', pathMatch: 'full' },
];
