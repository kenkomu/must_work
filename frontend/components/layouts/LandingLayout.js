import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../sections/Header";

export default function LandingLayout({ isSignedIn, wallet, ...props }) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <Header isSignedIn={isSignedIn} wallet={wallet} />
      {props.children}
    </Flex>
  );
}
