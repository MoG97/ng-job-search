import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Job } from '../services/job.types';
import { JobService } from '../services/job.service';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from '../job-card/job-card.component';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
  favourites$: Observable<Job[]> | undefined;

  constructor(private jobService: JobService){
    
  }

  ngOnInit(){
    let favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.favourites$ = this.jobService.getJobs().pipe(
      map(jobs => jobs.filter(job => favoriteIds.includes(job.id))));
  }
}
