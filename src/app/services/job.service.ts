import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Job, JobDetails } from './job.types';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor() {
  }

  getJobs(): Observable<Job[]> {
    return from(fetch('/jobs').then(response => response.json()));
  }

  getJobDetails(id: number): Observable<JobDetails> {
    return from(fetch(`/jobs/${id}`).then(response => response.json()));
  }

  addOrRemoveFromFavourites(id: number): void {
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    const index = favorites.indexOf(id);

    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }
}
