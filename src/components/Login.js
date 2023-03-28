import { signInWithGoogle, isLogged, currentUser } from "../services/firebase";
import React from "react";
import GoogleButton from "react-google-button";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: isLogged,
      currentUser: currentUser,
    };
  }

  render() {
    return (
      <div
        style={{
          width: "20%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <GoogleButton
          type="dark"
          onClick={signInWithGoogle}
          style={{ width: "100%" }}
          label={this.state.isLogged ? "Loged" : "Sign in with Google"}
        />
      </div>
    );
  }
}

export default Login;
