import firebase from "firebase/app";
import React, { FC } from "react";

import { AppBar, Box, Button, Container, styled, Toolbar, Typography } from "@material-ui/core";

import useAuthState from "../../hooks/useAuthState";

export interface PageContainerProps {}

const PageContainer: FC<PageContainerProps> = (props) => {
  const [user, userLoading] = useAuthState();
  const { children } = props;

  return (
    <StyledBox>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Container maxWidth="lg">
            <Box display="flex">
              <Typography>WhatsPlaying Bot</Typography>
              <Box flex={1} />
              {!userLoading && user && (
                <Button onClick={() => firebase.auth().signOut()}>
                  Logout
                </Button>
              )}
            </Box>
          </Container>
        </Toolbar>
      </StyledAppBar>
      <StyledContainer maxWidth="md">
        <>{children}</>
      </StyledContainer>
    </StyledBox>
  );
};

const StyledBox = styled(Box)({
  backgroundColor: "#333",
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: "transparent",
  boxShadow: "none",
});

const StyledContainer = styled(Container)({
  paddingTop: 100,
  minHeight: "100vh",
});

export default PageContainer;
