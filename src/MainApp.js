import React, { useEffect } from "react";
import "./MainApp.css";
import Header from "./Components/Header";
import Login from "./Login";
import Loading from "./Loading";
import firebase from "firebase";
import { auth, db } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chitthi from "./Components/Chitthi";

function MainApp() {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;

  return (
    <div className="asdf">
      {!user ? (
        <Login />
      ) : (
        <div className="mainApp">
          <div className="gradient_layer">
            {/* <Header /> */}
            <Chitthi />
          </div>
          <div className="blur">
            <div className="gradient_App"></div>
            <div className="gradient_App2"></div>
            <div className="gradient_App7"></div>
            <div className="gradient_App9"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainApp;
