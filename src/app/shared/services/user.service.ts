import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { from, Observable, of, switchMap } from 'rxjs';
import { Auth, getAuth } from '@angular/fire/auth';
import { USER_COLLECTION } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private firestore: Firestore,
    private authService: AuthService,
    private auth: Auth
  ) { }

  getProfile(): Observable<User | null> {
    return this.authService.currUser.pipe(
      switchMap(authUser => {
        if (!authUser) {
          return of(null);
        }

        return from(this.getUser(authUser.uid));
      })
    )
  }

  async getUser(userId: string): Promise<User | null> {
    try {
      const userDocRef = doc(this.firestore, USER_COLLECTION, userId);
      const userSnapshot = await getDoc(userDocRef);

      if (!userSnapshot.exists()) {
        return null;
      }

      const userData = userSnapshot.data() as User;
      const user = { ...userData, id: userId }

      return user;
    } catch (error) {
      console.error('An error occurred when loading current user:', error);
      return null;
    }
  }

}
