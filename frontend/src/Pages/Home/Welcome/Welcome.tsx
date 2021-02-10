import { Typography, useTheme } from "@material-ui/core";
import React, { FC } from "react";

export interface WelcomeProps {
  displayName: string | null;
}

const Welcome: FC<WelcomeProps> = (props) => {
  const theme = useTheme();
  const { displayName } = props;

  return (
    <Typography variant="h3">
      Welcome{" "}
      <i
        style={{
          fontSize: "0.90em",
          color: theme.palette.primary.light,
        }}
      >
        {displayName}
      </i>
    </Typography>
  );
};

export default Welcome;
