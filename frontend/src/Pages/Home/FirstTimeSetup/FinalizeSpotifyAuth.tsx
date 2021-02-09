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
      const spotifyTokensUrl = `${process.env.REACT_APP_API_URL}/authenticateWithSpotify?code=${search.code}`;
      fetch(spotifyTokensUrl)
        .then((res) => res.json())
        .then(async (tokens) => {
          const { access_token, refresh_token } = tokens;
          const userSettingsRef = firebase
            .firestore()
            .collection("settings")
            .doc(user.uid);
          await userSettingsRef.set({
            spotifyTokens: { access_token, refresh_token },
          });

          const defaultSettings = await firebase
            .firestore()
            .collection("defaultSettings")
            .doc("@@default")
            .get();
          await userSettingsRef.update({ ...defaultSettings.data() });
          window.close();
        });
    }
  }, [search.code, user, loading]);

  return <CircularProgress />;
};

export default FinalizeSpotifyAuth;
