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
        apiKey: "AIzaSyDCEgKuNLAcGaUvw_sU1Kix68FSmjbT1HI",
        authDomain: "daa-ii-2025-8049a.firebaseapp.com",
        projectId: "daa-ii-2025-8049a",
        storageBucket: "daa-ii-2025-8049a.firebasestorage.app",
        messagingSenderId: "986227776473",
        appId: "1:986227776473:web:8c41acf1e51b63fc3557c8",
        measurementId: "G-8193WQKRKS"
      })

    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};