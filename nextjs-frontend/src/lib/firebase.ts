/** @format */

import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Lazy initialization to prevent build-time errors
let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;

function getFirebaseApp(): FirebaseApp {
	if (typeof window === 'undefined') {
		throw new Error('Firebase can only be initialized on the client side');
	}

	if (!app) {
		// Check if app already exists (hot reload)
		const existingApps = getApps();
		if (existingApps.length > 0) {
			app = existingApps[0];
		} else {
			app = initializeApp(firebaseConfig);
		}
	}
	return app;
}

export function getFirebaseAuth(): Auth {
	if (!auth) {
		auth = getAuth(getFirebaseApp());
	}
	return auth;
}

export function getFirebaseDb(): Firestore {
	if (!db) {
		db = getFirestore(getFirebaseApp());
	}
	return db;
}

export default getFirebaseApp;
