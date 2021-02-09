import firebase from "firebase/app";
import React, { FC, useEffect, useMemo } from "react";

import { Button } from "@material-ui/core";

import FinalizeAuth from "./FinalizeAuth";

const LoginPage: FC = () => {
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

  useEffect(() => {
    firebase.auth().onAuthStateChanged(console.log);
  }, []);

  return (
    <>
      {!hasToken ? (
        <>
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
          <Button onClick={() => firebase.auth().signOut()}>Logout</Button>
        </>
      ) : (
        <FinalizeAuth twitchToken={hasToken.access_token} />
      )}
    </>
  );
};

export default LoginPage;
