import { Component, Input } from '@angular/core';
import { JobService } from '../services/job.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favourite-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favourite-icon.component.html',
  styleUrl: './favourite-icon.component.css'
})
export class FavouriteIconComponent {
  @Input() id: number | undefined;

  constructor(private jobService: JobService){
    
  }

  toggleFavourite() {
    if(this.id !== undefined)
    {
      this.jobService.addOrRemoveFromFavourites(this.id);
    }
  }

  isFavourited(){
    if(this.id !== undefined){
      let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
      return favorites.includes(this.id);
    }
    return false;
  }
}
