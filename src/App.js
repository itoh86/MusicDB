import React from "react";
import firebase from "./Utils/Firebase";
import "firebase/auth";

function App() {
  firebase.auth().onAuthStateChanged(currentUser => {
    console.log(currentUser ? "Estamos Logeados" : "No Estamos Logeados");
  });

  return (
    <div>
      <h1>App Electron + React</h1>
    </div>
  );
}

export default App;
