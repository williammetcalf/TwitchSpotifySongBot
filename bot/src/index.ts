import { StaticAuthProvider } from "twitch-auth";
import { ChatClient } from "twitch-chat-client";

console.log("Starting SpotifySongBot");

const clientId = process.env.TWITCH_CLIENT_ID || "";
const accessToken = process.env.TWITCH_AUTH_TOKEN || "";
const auth = new StaticAuthProvider(clientId, accessToken);

const channels: string[] = ["subfin"];
const client = new ChatClient(auth, { channels });

client.onConnect(() => {
  console.log("Connected!");
});
client.onMessage(console.log);
client.connect().then(() => {});
