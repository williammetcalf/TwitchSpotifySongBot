import firebase from "firebase/app";
import React, { FC, useEffect, useMemo } from "react";

import { CircularProgress } from "@material-ui/core";

import useAuthState from "../../../hooks/useAuthState";

export interface FinalizeSpotifyAuthProps {}

const FinalizeSpotifyAuth: FC<FinalizeSpotifyAuthProps> = (props) => {
  const [user, loading] = useAuthState();
  const search = useMemo(() => {
    const { search } = window.location;
    return search
      .substring(1)
      .split("&")
      .map((piece) => piece.split("="))
      .reduce<{ code: string }>(
        (obj, [key, value]) => ({ ...obj, [key]: value }),
        { code: "" }
      );
  }, []);

  useEffect(() => {
    if (user && !loading) {
      console.log("GOGOGO", user.uid);
      const spotifyTokensUrl = `${process.env.REACT_APP_API_URL}/authenticateWithSpotify?code=${search.code}`;
      fetch(spotifyTokensUrl)
        .then((res) => res.json())
        .then(async (tokens) => {
          console.log(tokens);
          const { access_token, refresh_token } = tokens;
          await firebase
            .firestore()
            .collection("settings")
            .doc(user.uid)
            .set({ spotifyTokens: { access_token, refresh_token } });
          window.close();
        });
    }
  }, [search.code, user, loading]);

  return <CircularProgress />;
};

export default FinalizeSpotifyAuth;
