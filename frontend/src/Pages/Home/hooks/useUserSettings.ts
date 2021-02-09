import firebase from "firebase/app";
import { useDocumentData } from "react-firebase-hooks/firestore";

function useUserSettings(user: firebase.User) {
  return useDocumentData(
    firebase.firestore().collection("settings").doc(user.uid)
  );
}

export default useUserSettings;
