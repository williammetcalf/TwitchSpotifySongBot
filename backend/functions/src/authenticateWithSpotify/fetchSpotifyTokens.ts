import { firebaseConfig } from "firebase-functions";

async function fetchSpotifyTokens(code: string) {
  const config = firebaseConfig();
  return { code, config };
}

export default fetchSpotifyTokens;
