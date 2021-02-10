import { Box, Button, styled } from "@material-ui/core";
import React, { FC } from "react";

export interface ControlButtonsProps {
  onSave: () => void;
  onReset: () => void;
  formDirty: boolean;
}

const ControlButtons: FC<ControlButtonsProps> = (props) => {
  const { onSave, onReset, formDirty } = props;

  return (
    <StyledBox display="flex" flex={1}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSave()}
        disabled={!formDirty}
      >
        Save Changes
      </Button>
      <Button variant="outlined" onClick={onReset}>
        Reset
      </Button>
    </StyledBox>
  );
};

const StyledBox = styled(Box)({
  "&>:not(:last-child)": {
    marginRight: "1em",
  },
});

export default ControlButtons;
