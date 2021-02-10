import { Box, Divider, Grid, styled, Typography } from "@material-ui/core";
import firebase from "firebase/app";
import React, { FC } from "react";
import useAuthState from "../../../hooks/useAuthState";
import Command from "./Command";
import ControlButtons from "./ControlButtons";
import ResponseFormat from "./ResponseFormat";
import Status from "./Status";
import useSettings from "./useSettings";

export interface ConfigureBotSettingsProps {}

const ConfigureBotSettings: FC<ConfigureBotSettingsProps> = (props) => {
  const [user] = useAuthState();
  const docRef = firebase.firestore().collection("settings").doc(user?.uid);
  const { save, reset, settings, update, loading, formDirty } = useSettings(
    docRef
  );

  if (loading) return null;

  return (
    <Box>
      <Box style={{ margin: "1em 2em 3em 2em" }}>
        <Status
          status={settings.enabled}
          onChange={(status) => docRef.update({ enabled: status })}
        />
      </Box>
      <Typography variant="h5">Configuration</Typography>
      <Divider />
      <StyledGrid container spacing={2} style={{ marginTop: "1em" }}>
        <Grid item md={4} xs={12}>
          <Command
            command={settings.command}
            onChange={(command) => update({ command })}
          />
        </Grid>
        <Grid item md={8} xs={12}>
          <ResponseFormat
            format={settings.responseFormat}
            onChange={(responseFormat) => update({ responseFormat })}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlButtons onSave={save} onReset={reset} formDirty={formDirty} />
        </Grid>
      </StyledGrid>
    </Box>
  );
};

const StyledGrid = styled(Grid)({
  width: "100%",
});

export default ConfigureBotSettings;
