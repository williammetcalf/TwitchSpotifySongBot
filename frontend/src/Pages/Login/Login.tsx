import React, { FC } from "react";
import { Redirect } from "react-router-dom";

import useAuthState from "../../hooks/useAuthState";
import FinalizeAuth from "./FinalizeAuth";
import StartAuthentication from "./StartAuthentication";
import useAuthToken from "./useAuthToken";

const LoginPage: FC = () => {
  const [user, userLoading] = useAuthState();
  const token = useAuthToken();

  if (userLoading) return null;
  if (!userLoading && user !== null) return <Redirect to="/" />;

  return (
    <>
      {!token ? (
        <StartAuthentication />
      ) : (
        <FinalizeAuth twitchToken={token.access_token} />
      )}
    </>
  );
};

export default LoginPage;
