// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLVonMIeQcWDgXh8HUf_GxFCnEeu2iw",
  authDomain: "lumsign-quote-system.firebaseapp.com",
  projectId: "lumsign-quote-system",
  storageBucket: "lumsign-quote-system.firebasestorage.app",
  messagingSenderId: "1032106770764",
  appId: "1:1032106770764:web:a075dc48bca51c29f28fe9"
};

const app = initializeApp(firebaseConfig);

export { app };
