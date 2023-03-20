import React, { Component } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
export default class Footer extends Component {
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
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <li>
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
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
