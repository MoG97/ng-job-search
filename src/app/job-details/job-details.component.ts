import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../services/job.service';
import { JobDetails } from '../services/job.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  jobId: number;
  job$: Observable<JobDetails> | undefined;

  constructor(private route: ActivatedRoute, private jobService: JobService ){
    this.jobId = +this.route.snapshot.params['id']; 
  }

  ngOnInit(){
    this.job$ = this.jobService.getJobDetails(this.jobId);
  }

  formatHtml(htmlString: string) {
    const domParser = new DOMParser();
    const dom = domParser.parseFromString('<!doctype html><body>' + htmlString, 'text/html');
    return dom.body.textContent;
  }
}
