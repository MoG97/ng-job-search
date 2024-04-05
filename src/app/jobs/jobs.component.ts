import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JobService } from '../services/job.service';
import { CommonModule } from '@angular/common';
import { Job } from '../services/job.types';
import { JobCardComponent } from '../job-card/job-card.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  jobs$: Observable<Job[]> | undefined;

  constructor(private jobService: JobService) {
  }

  ngOnInit(){
    this.jobs$ = this.jobService.getJobs();
  }
}
