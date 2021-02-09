import firebase from "firebase/app";
import React, { ComponentType, FC } from "react";
import { Redirect } from "react-router-dom";

import useAuthState from "../hooks/useAuthState";

function withAuthGuard<T extends { user: firebase.User }>(
  Component: ComponentType<T>
) {
  const HOC: FC<T> = (props) => {
    const [user, userLoading] = useAuthState();
    if (userLoading) return null;
    if (!user) return <Redirect to="/auth" />;

    return <Component {...props} user={user} />;
  };

  return HOC;
}

export default withAuthGuard;
