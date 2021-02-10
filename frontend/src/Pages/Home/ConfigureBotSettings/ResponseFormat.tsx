import { TextField } from "@material-ui/core";
import React, { FC } from "react";

export interface ResponseFormatProps {
  format: string;
  onChange: (value: string) => void;
}

const ResponseFormat: FC<ResponseFormatProps> = (props) => {
  const { format, onChange } = props;

  return (
    <TextField
      label="Response Format"
      helperText="Can include variables: <user> <song> <artist> <link>"
      value={format}
      onChange={(e) => onChange(e.target.value)}
      multiline
      fullWidth
    />
  );
};

export default ResponseFormat;
