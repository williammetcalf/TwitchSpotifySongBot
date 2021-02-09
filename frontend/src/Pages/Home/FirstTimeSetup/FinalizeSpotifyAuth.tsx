import React, { FC, useEffect, useMemo } from "react";

import { CircularProgress } from "@material-ui/core";

export interface FinalizeSpotifyAuthProps {}

const FinalizeSpotifyAuth: FC<FinalizeSpotifyAuthProps> = (props) => {
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
    fetch(
      `${process.env.REACT_APP_API_URL}/authenticateWithSpotify?code=${search.code}`
    )
      .then((res) => res.json())
      .then(console.log);
  }, [search.code]);

  return <CircularProgress />;
};

export default FinalizeSpotifyAuth;
