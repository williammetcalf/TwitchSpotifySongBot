import React, { FC } from "react";

import { Box, Button, styled, Typography } from "@material-ui/core";

const FirstTimeSetup: FC = () => {
  return (
    <StyledBox>
      <Typography>
        It appears this is your first time logging in. In order to integrate
        with Spotify, you must first link your Spotify account.
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          const redirectUrl = `${window.location.origin}/spotifyCallback`;
          const spotifyUrl =
            `https://accounts.spotify.com/authorize?` +
            `client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&` +
            `response_type=code&` +
            `redirect_uri=${redirectUrl}&` +
            `scope=user-read-currently-playing`;
          window.open(
            spotifyUrl,
            "Authenticate with Spotify",
            `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=500,height=700`
          );
        }}
      >
        Connect to Spotify
      </Button>
    </StyledBox>
  );
};

const StyledBox = styled(Box)({
  "&>:not(:last-child)": {
    marginBottom: "1em",
  },
});
export default FirstTimeSetup;
