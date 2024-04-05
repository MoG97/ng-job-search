import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  [x: string]: any;

  getJobs(){
    console.log("Hello")
  }
}
