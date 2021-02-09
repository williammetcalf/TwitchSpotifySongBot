import * as admin from "firebase-admin";

const key = require("../service_account.json");
const cert = admin.credential.cert(key);
admin.initializeApp({ credential: cert });

export { default as authenticateWithTwitch } from "./authenticateWithTwitch";
export { default as authenticateWithSpotify } from "./authenticateWithSpotify";
