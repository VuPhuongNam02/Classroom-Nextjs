import { forwardRef } from "react";
import { Container as ChakraContainer, ContainerProps } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const CContainer = ({ children, ...props }: Props) => {
  return (
    <ChakraContainer {...props} maxW={["full", "834px", "1445px", "1920px"]}>
      {children}
    </ChakraContainer>
  );
};

export default CContainer;
