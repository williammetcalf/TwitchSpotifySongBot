import * as cors from "cors";
import * as functions from "firebase-functions";

import fetchTwitchUserInfo from "./fetchTwitchUserInfo";
import getFirestoreAuthToken from "./getFirestoreAuthToken";

const authenticateWithTwitch = functions.https.onRequest((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  cors({ origin: true })(req, res, async () => {
    const twitchToken = req.query.token as string;

    try {
      const twitchUser = await fetchTwitchUserInfo(twitchToken);
      const { sub, preferred_username } = twitchUser;
      const uid = `twitch:${sub}`;
      const authToken = await getFirestoreAuthToken(uid, preferred_username);

      res.send({ token: authToken, name: preferred_username });
    } catch (err) {
      res.status(500).send({ error: err.message });
      throw err;
    }
  });
});

export default authenticateWithTwitch;
