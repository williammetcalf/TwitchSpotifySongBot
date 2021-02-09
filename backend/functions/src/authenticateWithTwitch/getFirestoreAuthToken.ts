import { auth, firestore } from "firebase-admin";

async function getFirestoreAuthToken(uid: string, name: string) {
  try {
    await auth().getUser(uid);
  } catch (err) {
    await auth().createUser({ displayName: name, uid });
  }

  await firestore().collection("users").doc(uid).set({ uid, name });

  return await auth().createCustomToken(uid);
}

export default getFirestoreAuthToken;
