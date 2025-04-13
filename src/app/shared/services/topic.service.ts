import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Topic } from '../models/Topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private userService: UserService) { }

  topics: Topic[] = [
    {
     id: 1,
     name: 'Tech',
     description: 'This topic is made for all the people who like talking about tech things.',
     createdBy: 'testuser',
     createdAt: new Date(2017, 4, 12, 16, 30, 23, 26),
     comments: [
      {
        id: 1,
        user: 'testuser',
        content: 'Test comment.',
        createdAt: new Date(2017, 4, 12, 18, 34, 13, 56)
      },
      {
        id: 2,
        user: 'testuser',
        content: 'Second test comment.',
        createdAt: new Date(2017, 4, 12, 19, 34, 13, 56)
      },
      {
        id: 3,
        user: 'testuser',
        content: 'Third test comment.',
        createdAt: new Date(2017, 4, 16, 18, 34, 13, 56)
      },
     ]
    },
    {
      id: 2,
      name: 'Sports',
      description: 'This topic is made for all the people who like talking about sport things.',
      createdBy: 'testuser',
      createdAt: new Date(2017, 2, 3, 10, 38, 32, 25),
      comments: [
        {
          id: 4,
          user: 'testuser',
          content: 'I think this is a good topic to talk about.',
          createdAt: new Date(2017, 2, 3, 11, 42, 12, 45) 
        },
        {
          id: 5,
          user: 'testuser',
          content: 'Test comment to test the functionalities of the website',
          createdAt: new Date(2017, 2, 4, 16, 12, 52, 23) 
        }
      ]
    },
    {
      id: 3,
      name: 'Photography',
      description: 'This topic is made for all the people who like talking about photography things.',
      createdBy: 'testuser',
      createdAt: new Date(2020, 4, 15, 19, 20, 13, 26),
      comments: [
       {
         id: 6,
         user: 'testuser',
         content: 'Test comment.',
         createdAt: new Date(2017, 4, 12, 18, 34, 13, 56)
       },
       {
         id: 7,
         user: 'testuser',
         content: 'Second test comment.',
         createdAt: new Date(2017, 4, 12, 19, 34, 13, 56)
       },
       {
         id: 8,
         user: 'testuser',
         content: 'Third test comment.',
         createdAt: new Date(2017, 4, 16, 18, 34, 13, 56)
       },
      ]
     },
     {
      id: 4,
      name: 'Health',
      description: 'This topic is made for all the people who like talking about healthy things.',
      createdBy: 'testuser',
      createdAt: new Date(2018, 4, 15, 19, 20, 13, 26),
      comments: [
       {
         id: 9,
         user: 'testuser',
         content: 'Test comment.',
         createdAt: new Date(2017, 4, 12, 18, 34, 13, 56)
       },
       {
         id: 10,
         user: 'testuser',
         content: 'Second test comment.',
         createdAt: new Date(2017, 4, 12, 19, 34, 13, 56)
       },
       {
         id: 11,
         user: 'testuser',
         content: 'Third test comment.',
         createdAt: new Date(2017, 4, 16, 18, 34, 13, 56)
       },
      ]
     }
   ]

   getAllTopics(): Topic[] {
    return this.topics;
   }
}
