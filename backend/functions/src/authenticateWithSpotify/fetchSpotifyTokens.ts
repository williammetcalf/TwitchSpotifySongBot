import * as functions from "firebase-functions";

import SpotifyWebApi = require("spotify-web-api-node");

async function fetchSpotifyTokens(code: string, redirectUri: string) {
  const config = functions.config();
  const clientId = config.spotify.id;
  const clientSecret = config.spotify.secret;
  const spotify = new SpotifyWebApi({ clientId, clientSecret, redirectUri });

  try {
    const { body } = await spotify.authorizationCodeGrant(code);
    return body;
  } catch (err) {
    functions.logger.error("Error fetching Spotify tokens", err);
    throw err;
  }
}

export default fetchSpotifyTokens;
