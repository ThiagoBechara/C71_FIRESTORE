import firebase from "firebase"
require("@firebase/firestore")

//adicione a configuração do firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();