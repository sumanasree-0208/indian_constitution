// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';  // Import Firebase Auth
import { getAnalytics } from 'firebase/analytics';  // Optional: Analytics

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPPWiGlDgLLUHmeEwrilPLuhryufvrSSU",
    authDomain: "project-aa209.firebaseapp.com",
    projectId: "project-aa209",
    storageBucket: "project-aa209.appspot.com",
    messagingSenderId: "979644191873",
    appId: "1:979644191873:web:a8f60cf8dce3bfe2a9a980",
    measurementId: "G-KPPXJNQ2G6"
};

// Declare Firebase services
let db;
let storage;
let auth;
let analytics;

try {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Firestore, Storage, and Auth
    db = getFirestore(app);
    storage = getStorage(app);
    auth = getAuth(app);  // Initialize Firebase Authentication
    analytics = getAnalytics(app);  // Optional: Initialize Analytics if needed

    console.log("Firebase initialized successfully!");
} catch (error) {
    console.error("Firebase initialization error: ", error);

    // Optional: Detailed error reporting
    if (error.code === "auth/invalid-api-key") {
        console.error("Invalid API key provided.");
    } else if (error.code === "auth/network-request-failed") {
        console.error("Network error: Check your internet connection.");
    }
    // Add more specific error handling cases as needed
}

// Export Firestore, Storage, Auth, and Analytics (if needed) to be used in other parts of your app
export { db, storage, auth, analytics };