// LoginPage.js
import React from 'react';
import { Login } from 'react-admin';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '#/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const SignInScreen = () => <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />;

const CustomLoginForm = (props: any) => (
  <div>
    <SignInScreen />
  </div>
);

const CustomLoginPage = (props: any) => (
  <Login {...props}>
    <CustomLoginForm {...props} />
  </Login>
);

export default CustomLoginPage;
