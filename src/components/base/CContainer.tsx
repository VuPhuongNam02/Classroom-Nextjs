import { forwardRef } from "react";
import { Container as ChakraContainer, ContainerProps } from "@chakra-ui/react";
import React from "react";

const CContainer = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...props }, ref) => {
    return (
      <ChakraContainer
        {...props}
        ref={ref}
        maxW={["full", "834px", "1445px", "1920px"]}
      >
        {children}
      </ChakraContainer>
    );
  }
);

export default CContainer;
