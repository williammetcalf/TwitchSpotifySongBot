import { useMemo } from "react";

type SpotifyResponse = { access_token: string };

function useAuthToken() {
  return useMemo<SpotifyResponse | undefined>(() => {
    const { hash } = document.location;
    if (!hash) return undefined;
    return document.location.hash
      .substring(1)
      .split("&")
      .map((piece) => piece.split("="))
      .reduce<SpotifyResponse>(
        (obj, entry) => {
          return { ...obj, [entry[0]]: entry[1] };
        },
        { access_token: "" }
      );
  }, []);
}

export default useAuthToken;
