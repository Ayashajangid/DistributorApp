import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const googleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signOut();
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const data = await auth().signInWithCredential(googleCredential);
    // console.log('data', data);
    return data;
  } catch (error) {
    throw error;
  }
};
export const logout = () => {
  auth().signOut();
  return 'User signed out!';
};
