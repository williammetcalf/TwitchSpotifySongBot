import { auth, firestore } from "firebase-admin";
import { logger } from "firebase-functions";

async function getFirestoreAuthToken(uid: string, name: string) {
  try {
    await auth().getUser(uid);
  } catch (err) {
    logger.error(err);
    await auth().createUser({ uid });
  }

  await firestore().collection("users").doc(uid).set({ uid, name });

  return await auth().createCustomToken(uid);
}

export default getFirestoreAuthToken;
