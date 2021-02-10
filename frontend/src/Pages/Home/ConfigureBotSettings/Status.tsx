import { Box, Button, Typography } from "@material-ui/core";
import React, { FC } from "react";

export interface StatusProps {
  status: boolean;
  onChange: (status: boolean) => void;
}

const Status: FC<StatusProps> = (props) => {
  const { status, onChange } = props;

  return (
    <Box display="flex" alignItems="center">
      <Button variant="outlined" onClick={() => onChange(!status)}>
        {status ? "Deactivate" : "Activate"}
      </Button>
      <Typography style={{ margin: "0 0.5em" }}>
        Current bot status:{" "}
      </Typography>
      <Typography color={status ? "secondary" : "error"}>
        {status ? "Active" : "Inactive"}
      </Typography>
    </Box>
  );
};

export default Status;
