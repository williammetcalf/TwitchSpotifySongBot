import firebase from "firebase/app";
import React, { FC } from "react";

import { Typography } from "@material-ui/core";

import PageContainer from "../../components/PageContainer";
import withAuthGuard from "../../components/withAuthGuard";
import FirstTimeSetup from "./FirstTimeSetup";
import useUserSettings from "./hooks/useUserSettings";

interface Props {
  user: firebase.User;
}

const HomePage: FC<Props> = (props) => {
  const { user } = props;
  const { displayName } = user;
  const [data, loading] = useUserSettings(user);
  const isNewUser = !loading && !data;

  return (
    <PageContainer>
      <Typography variant="h3">
        Welcome <i style={{ fontSize: "0.90em" }}>{displayName}</i>
      </Typography>
      {isNewUser && <FirstTimeSetup />}
    </PageContainer>
  );
};

export default withAuthGuard<Props>(HomePage);
