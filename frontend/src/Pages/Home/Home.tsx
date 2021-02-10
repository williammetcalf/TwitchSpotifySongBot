import firebase from "firebase/app";
import React, { FC } from "react";
import PageContainer from "../../components/PageContainer";
import withAuthGuard from "../../components/withAuthGuard";
import ConfigureBotSettings from "./ConfigureBotSettings";
import FirstTimeSetup from "./FirstTimeSetup";
import useUserSettings from "./hooks/useUserSettings";
import Welcome from "./Welcome/Welcome";

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
      <Welcome displayName={displayName} />
      {isNewUser && <FirstTimeSetup />}
      {!isNewUser && <ConfigureBotSettings />}
    </PageContainer>
  );
};

export default withAuthGuard<Props>(HomePage);
