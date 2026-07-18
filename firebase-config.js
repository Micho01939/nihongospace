// Configuración e inicialización de Firebase para NihongoSpace.
// Este archivo se importa desde las demás páginas (login, conoceme, panel, leccion1).

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCkdbGsNCigWZXjX4AjFNDMeCj4an-Ahhw",
    authDomain: "nihongospace-72060.firebaseapp.com",
    projectId: "nihongospace-72060",
    storageBucket: "nihongospace-72060.firebasestorage.app",
    messagingSenderId: "857942068497",
    appId: "1:857942068497:web:10e0efc6e63013903dd0b0",
    measurementId: "G-TG8YN9NRWY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
