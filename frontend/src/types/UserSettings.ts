export type UserSettings = {
  command: string;
  enabled: boolean;
  responseFormat: string;
  spotifyTokens: { access_token: string; refresh_token: string };
};
