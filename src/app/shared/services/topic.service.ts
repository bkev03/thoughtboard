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
     createdBy: {
      nickname: 'testuser',
      name: {
        firstname: 'Test',
        lastname: 'User'
      },
      signupDate: new Date(2016, 6, 23, 12, 30, 32, 25),
      email: 'test@email.com',
      password: 'testpassword',
      role: "ROLE_USER",
    },
     createdAt: new Date(2017, 4, 12, 16, 30, 23, 26),
     comments: [],
    },
    {
      id: 2,
      name: 'Sports',
      description: 'This topic is made for all the people who like talking about sport things.',
      createdBy: {
       nickname: 'testuser',
       name: {
         firstname: 'Test',
         lastname: 'User'
       },
       signupDate: new Date(2016, 6, 23, 12, 30, 32, 25),
       email: 'test@email.com',
       password: 'testpassword',
       role: "ROLE_USER",
     },
      createdAt: new Date(2017, 2, 3, 10, 38, 32, 25),
      comments: [],
    }
   ]

   getAllTopics(): Topic[] {
    return this.topics;
   }
}
