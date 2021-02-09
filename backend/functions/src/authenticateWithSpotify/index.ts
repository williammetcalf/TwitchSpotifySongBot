import * as functions from "firebase-functions";

import fetchSpotifyTokens from "./fetchSpotifyTokens";

const authenticateWithSpotify = functions.https.onRequest(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const spotifyCode = req.query.code as string;
  const tokens = await fetchSpotifyTokens(
    spotifyCode,
    `${req.header("origin")}/spotifyCallback`
  );

  res.send(tokens);
});

export default authenticateWithSpotify;
