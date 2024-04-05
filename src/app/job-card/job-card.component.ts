import { Component, Input } from '@angular/core';
import { Job } from '../services/job.types';
import { RouterLink } from '@angular/router';
import { FavouriteIconComponent } from '../favourite-icon/favourite-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule, RouterLink, FavouriteIconComponent],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
  @Input() job?: Job;
  @Input() hideFavouriteIcon?: boolean = false;
}
