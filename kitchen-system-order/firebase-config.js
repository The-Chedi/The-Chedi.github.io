const firebaseConfig = {
  apiKey: "AIzaSyD57ErKNYwqGbLcriDYYvPUtVIw8jRncXQ",
  authDomain: "system-order-kitchen.firebaseapp.com",
  projectId: "system-order-kitchen",
  storageBucket: "system-order-kitchen.firebasestorage.app",
  messagingSenderId: "429224554052",
  appId: "1:429224554052:web:7536c4cdea334679fcd611"

};


const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);
