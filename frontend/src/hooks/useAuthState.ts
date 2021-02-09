import firebase from "firebase/app";
import { useAuthState as useAuthStateHook } from "react-firebase-hooks/auth";

function useAuthState(): [firebase.User | undefined, boolean, any] {
  return useAuthStateHook(firebase.auth());
}

export default useAuthState;
