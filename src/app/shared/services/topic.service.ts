import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Topic } from '../models/Topic';
import { collection, collectionData, doc, Firestore, getDoc, getDocs, limit, orderBy, query, where } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { from, Observable } from 'rxjs';
import { TOPIC_COLLECTION } from '../constants/constants';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(
    private firestore: Firestore,
    private authService: AuthService
  ) { }

  // READ
  getAllTopics(): Observable<Topic[]> {
    return from(new Promise<Topic[]>(async (resolve, reject) => {
        try {
          const topicCollection = collection(this.firestore, TOPIC_COLLECTION);
          const topics: Topic[] = [];

          const q = query(topicCollection, orderBy('createdAt', 'asc'));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach(doc => {
            topics.push({ ...doc.data(), id: doc.id } as Topic);
          });

          resolve(topics);
        } catch (error) {
          console.error('Error fetching topics:', error);
          reject(error);
        }
      }));
  }

  getTopicById(id: string): Promise<Topic | null> {
    return new Promise<Topic>(async (resolve, reject) => {
        try {
          const topicCollection = collection(this.firestore, TOPIC_COLLECTION);

          // complex
          const q = query(topicCollection, 
            where("id", "==", id), 
            limit(1));
          const querySnapshot = await getDocs(q);
          const topic = querySnapshot.docs[0];

          if (!topic) {
            reject(new Error('Topic not found: ' + id));
          }

          const topicData = topic.data() as Topic;
          resolve(topicData);
        } catch (error) {
          console.error('Error fetching topics:', error);
          reject(error);
        }
      });
  }

  async getCommentsByTopicId(id: string): Promise<Comment[] | null> {
    const topicDocRef = doc(this.firestore, TOPIC_COLLECTION, id);
    const topicSnapshot = await getDoc(topicDocRef);

    if (!topicSnapshot.exists()) {
      return [];
    }

    const comments: string[] = topicSnapshot.data()['comments'] || [];
  
    const commentPromises = comments.map(id => {
      const commentDocRef = doc(this.firestore, 'Comments', id);
      return getDoc(commentDocRef);
    });

    const commentSnapshots = await Promise.all(commentPromises);

    return commentSnapshots.map(snap => ({...snap.data() as Comment}) as Comment);
  }
}
