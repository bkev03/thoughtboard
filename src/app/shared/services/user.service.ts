import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      nickname: 'testuser',
      name: {
        firstname: 'Test',
        lastname: 'User'
      },
      signupDate: new Date(2016, 6, 23, 12, 30, 32, 25),
      email: 'test@email.com',
      password: 'testpassword',
      role: "ROLE_USER",
    }
  ]

  constructor() { }

  addUser(user: User): boolean {
    if (this.users.find(u => u.nickname === user.nickname) || this.users.find(u => u.email === user.email)) {
      return false;
    }
    
    this.users.push(user);
    return true;
  }

  getUsers(): User[] {
    return this.users;
  }

  getUserByNickname(nickname: string): User | null {
    if (!this.users.find(u => u.nickname === nickname)) {
      return null;
    }

    let found = this.users.find(u => u.nickname === nickname);

    if (!found) {
      return null;
    }

    return found;
  }
}
