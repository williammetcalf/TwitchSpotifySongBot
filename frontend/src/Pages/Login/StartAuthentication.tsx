import React, { FC } from "react";

import { Button } from "@material-ui/core";

const StartAuthentication: FC = () => {
  return (
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
  );
};

export default StartAuthentication;
