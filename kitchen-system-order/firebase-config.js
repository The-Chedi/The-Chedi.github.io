const firebaseConfig = {
  apiKey: "AIzaSyD57ErKNYwqGbLcriDYYvPUtVIw8jRncXQ",
  authDomain: "system-order-kitchen.firebaseapp.com",
  projectId: "system-order-kitchen",
  storageBucket: "system-order-kitchen.firebasestorage.app",
  messagingSenderId: "429224554052",
  appId: "1:429224554052:web:7536c4cdea334679fcd611"

};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
console.log("✅ Firebase initialized successfully");
