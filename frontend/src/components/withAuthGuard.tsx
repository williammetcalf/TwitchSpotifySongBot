import React, { ComponentType, FC } from "react";
import { Redirect } from "react-router-dom";

import useAuthState from "../hooks/useAuthState";

function withAuthGuard<T>(Component: ComponentType<T>) {
  const HOC: FC<T> = (props) => {
    const [user, userLoading] = useAuthState();
    if (userLoading) return null;
    if (!user) return <Redirect to="/auth" />;

    return <Component {...props} />;
  };

  return HOC;
}

export default withAuthGuard;
