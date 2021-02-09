import * as cors from "cors";
import * as functions from "firebase-functions";

import fetchSpotifyTokens from "./fetchSpotifyTokens";

const authenticateWithSpotify = functions.https.onRequest((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  cors({ origin: true })(req, res, async () => {
    const spotifyCode = req.query.code as string;

    const auth = fetchSpotifyTokens(spotifyCode);
    res.send(auth);
  });
});

export default authenticateWithSpotify;
