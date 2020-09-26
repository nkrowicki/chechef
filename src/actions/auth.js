import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import Swal from "sweetalert2";

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        Swal.fire("Ups!", e.message);
      });
  };
};

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch(logout())
        // Dispatch an clear action state
    }
}

export const login = (uid, displayName) => ({
  type: types.authLogin,
  payload: {
    uid,
    displayName,
  },
});

export const logout = () => ({
    type: types.authLogout
})