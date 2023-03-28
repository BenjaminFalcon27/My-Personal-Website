import React, { Component, useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Login from "./components/Login";
import firebase from "./services/firebase";
import { getAuth } from "firebase/auth";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Footer resumeData={resumeData} />
        <Login />
      </div>
    );
  }
}

function getAuthState() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(firebase); // Initialisez le service authentification en utilisant le SDK Firebase
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return user;
}

export default App;
