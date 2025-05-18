import { Injectable } from '@angular/core';
import { Poll } from '../models/Poll';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  polls: Poll[] = [
    
  ]

  getAllPolls(): Poll[] {
    return this.polls;
  }
}
