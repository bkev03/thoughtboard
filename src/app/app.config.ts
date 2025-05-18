import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withComponentInputBinding()), 
    provideFirebaseApp(() => initializeApp(
      { projectId: "thoughtboard-a078d", 
        appId: "1:891397886009:web:c47032d4f29308d0b8fde8", 
        storageBucket: "thoughtboard-a078d.firebasestorage.app", 
        apiKey: "AIzaSyDYbVdwQT8wx7ePlEbHAAwvTRhOWM0HoV8", 
        authDomain: "thoughtboard-a078d.firebaseapp.com", 
        messagingSenderId: "891397886009" 
      })), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())]
};
