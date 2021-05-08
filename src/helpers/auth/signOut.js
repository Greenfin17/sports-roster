import firebase from 'firebase/app';

const signOut = async () => {
  await firebase.auth().signOut();
};

export default signOut;
