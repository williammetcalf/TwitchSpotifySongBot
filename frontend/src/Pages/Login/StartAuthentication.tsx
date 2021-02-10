import React, { FC } from "react";

import { Button, Typography } from "@material-ui/core";

import PageContainer from "../../components/PageContainer";

const StartAuthentication: FC = () => {
  return (
    <PageContainer>
      <Typography variant="h3" style={{ marginBottom: "0.5em" }}>
        Login with Twitch to continue...
      </Typography>
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          const twitchUrl =
            `https://id.twitch.tv/oauth2/authorize?` +
            `client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}&` +
            `redirect_uri=${window.location.origin}/auth?&` +
            `response_type=token+id_token&` +
            `scope=openid`;
          window.open(
            twitchUrl,
            "Authenticate with Twitch",
            `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=500,height=700`
          );
        }}
      >
        Login with Twitch
      </Button>
    </PageContainer>
  );
};

export default StartAuthentication;
