import { TextField } from "@material-ui/core";
import React, { FC } from "react";

export interface CommandProps {
  command: string;
  onChange: (value: string) => void;
}

const Command: FC<CommandProps> = (props) => {
  const { command, onChange } = props;

  return (
    <TextField
      label="Song Command"
      helperText="Chat message to trigger the song command"
      value={command}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      multiline
      rowsMax={1}
    />
  );
};

export default Command;
