import axios from "axios";
import * as functions from "firebase-functions";

async function fetchTwitchUserInfo(token: string) {
  try {
    const { data } = await axios.get<{
      sub: string;
      preferred_username: string;
    }>(`https://id.twitch.tv/oauth2/userinfo`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    functions.logger.error("Failed to fetch Twitch user info:", err.message);
    throw err;
  }
}

export default fetchTwitchUserInfo;
