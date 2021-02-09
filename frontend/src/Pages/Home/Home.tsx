import React, { FC } from "react";

import { Box, Typography } from "@material-ui/core";

import withAuthGuard from "../../components/withAuthGuard";

export interface HomePageProps {}

const HomePage: FC<HomePageProps> = (props) => {
  const {} = props;

  return (
    <Box>
      <Typography>Home Page!</Typography>
    </Box>
  );
};

export default withAuthGuard(HomePage);
