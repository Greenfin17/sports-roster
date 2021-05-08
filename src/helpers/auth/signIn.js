import firebase from 'firebase/app';

const signIn = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  await firebase.auth().signInWithPopup(provider);
};

export default signIn;
