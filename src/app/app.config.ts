import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging())
    ),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-57574","appId":"1:232283349857:web:e8cc7f57c7327e0f92db20","storageBucket":"friendlychat-57574.firebasestorage.app","apiKey":"AIzaSyBWc4uZcc3fXrGwQY_3TuXFWnLzd7s-gbk","authDomain":"friendlychat-57574.firebaseapp.com","messagingSenderId":"232283349857"})), provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-57574","appId":"1:232283349857:web:e8cc7f57c7327e0f92db20","storageBucket":"friendlychat-57574.firebasestorage.app","apiKey":"AIzaSyBWc4uZcc3fXrGwQY_3TuXFWnLzd7s-gbk","authDomain":"friendlychat-57574.firebaseapp.com","messagingSenderId":"232283349857"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-57574","appId":"1:232283349857:web:e8cc7f57c7327e0f92db20","storageBucket":"friendlychat-57574.firebasestorage.app","apiKey":"AIzaSyBWc4uZcc3fXrGwQY_3TuXFWnLzd7s-gbk","authDomain":"friendlychat-57574.firebaseapp.com","messagingSenderId":"232283349857"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
