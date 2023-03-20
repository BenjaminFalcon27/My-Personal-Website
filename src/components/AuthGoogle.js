import React, { useEffect } from "react";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";

const AuthGoogle = (props) => {
  useEffect(
    () => {
      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(props.auth);
      ui.start("#firebaseui-auth-container", {
        signInOptions: [
          {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false,
          },
        ],
      });
    },
    [props.auth]
  );
  return (
    <div>
      <h1>AuthGoogle</h1>
      <div id="firebaseui-auth-container" />
    </div>
  );
};

export default AuthGoogle;
