import { Injectable } from '@angular/core';
import { Poll } from '../models/Poll';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  polls: Poll[] = [
    {
      id: 1,
      name: 'What\'s your favorite season?',
      description: 'Please share your preference about your favorite season with us!',
      open: true,
      createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
      closeDate: new Date(new Date().setDate(new Date().getDate() + 2)),
      createdBy: 'testuser',
      options: [
        {
          text: 'Winter',
          votes: 204
        },
        {
          text: 'Spring',
          votes: 342
        },
        {
          text: 'Summer',
          votes: 461
        },
        {
          text: 'Autumn',
          votes: 126
        }
      ],
      allVotes: 1133
    },
    {
      id: 2,
      name: 'Do you like pineapple on pizza?',
      description: 'The question is pretty self-explanatory, choose your answer.',
      open: true,
      createdAt: new Date(new Date().setDate(new Date().getDate() - 4)),
      closeDate: new Date(new Date().setDate(new Date().getDate() + 4)),
      createdBy: 'testuser',
      options: [
        {
          text: 'Yes!',
          votes: 2128
        },
        {
          text: 'No!',
          votes: 3247
        }
      ],
      allVotes: 5375
    },
    {
      id: 3,
      name: 'Do you like the website so far?',
      description: 'Please share your thoughts so that we can improve user experience.',
      open: false,
      createdAt: new Date(new Date().setDate(new Date().getDate() - 7)),
      closeDate: new Date(new Date().setDate(new Date().getDate() - 1)),
      createdBy: 'testuser',
      options: [
        {
          text: 'Yes!',
          votes: 4128
        },
        {
          text: 'No!',
          votes: 298
        }
      ],
      allVotes: 4426

    }
  ]

  getAllPolls(): Poll[] {
    return this.polls;
  }
}
