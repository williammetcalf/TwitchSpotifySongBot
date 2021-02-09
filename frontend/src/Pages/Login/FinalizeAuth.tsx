import firebase from "firebase/app";
import React, { FC, useEffect } from "react";

import { CircularProgress } from "@material-ui/core";

interface Props {
  twitchToken: string;
}

const FinalizeAuth: FC<Props> = (props) => {
  const { twitchToken } = props;

  useEffect(() => {
    const authUrl = `${process.env.REACT_APP_API_URL}/authenticateWithTwitch?token=${twitchToken}`;
    fetch(authUrl, { method: "GET" })
      .then((res) => res.json())
      .then(async (res) => {
        await firebase.auth().signInWithCustomToken(res.token);
        window.close();
      });
    // window.close();
  }, [twitchToken]);

  return <CircularProgress />;
};

export default FinalizeAuth;
