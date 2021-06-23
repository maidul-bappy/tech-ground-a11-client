import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import logo from '../../../images/logo.png';


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div className="login-page container d-flex justify-content-center text-center">
      <div className="row w-75 align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-12 shadow p-5">
			<img style={{height:'100px'}} src={logo} alt=""/>
			<h2 className="mt-4">Login</h2>
          <div className="from-group mt-5">
            <button className="btn btn-brand" onClick={handleGoogleSignIn}> <FcGoogle/> Google Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
