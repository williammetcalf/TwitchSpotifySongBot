import firebase from "firebase/app";
import { useAuthState as useAuthStateHook } from "react-firebase-hooks/auth";

function useAuthState() {
  return useAuthStateHook(firebase.auth());
}

export default useAuthState;
