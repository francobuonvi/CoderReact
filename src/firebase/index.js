
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvx7q4axoLDSiPetJCfJ5nlq6JEeSifUQ",
    authDomain: "a2p-store.firebaseapp.com",
    projectId: "a2p-store",
    storageBucket: "a2p-store.appspot.com",
    messagingSenderId: "402727802089",
    appId: "1:402727802089:web:c82a9fbb0bb68576990c78",
    measurementId: "G-KVJSZ3J5WC"
  };

 /* export function getFirebase(){
	return app;
}

export function getFirestore() {
	return firebase.firestore(app);
}
*/

  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)

  

  //En cada componente se debe obtener una referencia a la db y obtener una referencia a la coleccion

