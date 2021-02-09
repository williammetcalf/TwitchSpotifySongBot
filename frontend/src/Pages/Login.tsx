import React, { FC, useMemo } from "react";

import { Button, Typography } from "@material-ui/core";

interface Props {}

const LoginPage: FC<Props> = (props) => {
  const {} = props;
  const hasToken = useMemo(() => {
    const { hash } = document.location;
    if (!hash) return undefined;
    return document.location.hash
      .substring(1)
      .split("&")
      .map((piece) => piece.split("="))
      .reduce<Record<string, string>>((obj, entry) => {
        return { ...obj, [entry[0]]: entry[1] };
      }, {});
  }, []);

  return (
    <>
      {!hasToken ? (
        <Button
          onClick={() => {
            const twitchUrl =
              `https://id.twitch.tv/oauth2/authorize?` +
              `client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}&` +
              `redirect_uri=http://localhost:3000/auth?&` +
              `response_type=token+id_token&` +
              `scope=openid`;
            window.open(
              twitchUrl,
              "Authenticate with Twitch",
              `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=500,height=700`
            );
          }}
        >
          Authenticate
        </Button>
      ) : (
        <Button
          onClick={() => {
            const authUrl = `${process.env.REACT_APP_API_URL}/authenticateWithTwitch?token=${hasToken.access_token}`;
            fetch(authUrl, { method: "GET" })
              .then((res) => res.json())
              .then((res) => console.log(JSON.stringify(res)));
          }}
        >
          Fetch name
        </Button>
      )}
    </>
  );
};

export default LoginPage;
