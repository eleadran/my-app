import { ApplicationConfig,provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(() => 
      initializeApp({
        apiKey: "AIzaSyAl0AMubsVA0Yhhypt-1dbYMBJ55E7_-Wk",
  	authDomain: "ec3-2025-ib.firebaseapp.com",
  	projectId: "ec3-2025-ib",
  	storageBucket: "ec3-2025-ib.firebasestorage.app",
  	messagingSenderId: "529666123942",
  	appId: "1:529666123942:web:edcf8725aed33b65f66c67",
  	measurementId: "G-CEM91X1VDV"
      })

    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};