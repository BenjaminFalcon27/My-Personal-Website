import React, { Component } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

export default class Header extends Component {
  handleDownload = () => {
    const storageRef = firebase
      .storage()
      .ref()
      .child("CV.pdf");

    storageRef.getDownloadURL();
  };

  render() {
    let resumeData = this.props.resumeData;
    const firebaseConfig = {
      apiKey: "AIzaSyBULEmJjD_ItpObj6c2U9RCpFNFhwGXBao",
      authDomain: "cvbenjamin.firebaseapp.com",
      databaseURL:
        "https://cvbenjamin-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "cvbenjamin",
      storageBucket: "cvbenjamin.appspot.com",
      messagingSenderId: "808554890030",
      appId: "1:808554890030:web:1cd27b9f91a005092c30bf",
    };

    firebase.initializeApp(firebaseConfig);

    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            {/* <button onClick={this.handleDownload}>Download CV</button> */}
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                Hello, I am {resumeData.name}.
              </h1>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                I am a {resumeData.role}.{resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          {item.className === "fa fa-file-text" ? (
                            <i
                              className={item.className}
                              onClick={this.handleDownload}
                            />
                          ) : (
                            <i className={item.className} />
                          )}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
