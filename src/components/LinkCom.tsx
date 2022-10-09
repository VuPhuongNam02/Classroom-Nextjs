import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import styled from "@emotion/styled";

function LinkCom({ data = [] }: any) {
  return (
    data.children &&
    data.children.map((children: any, key: any) => (
      <Link key={key} href={children.href}>
        <FlexWrapp
        // color={activeColor(children.href, "light")}
        // background={activeColor(children.href, bg)}
        >
          <Box
            w="30px"
            h="30px"
            background="black"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
          >
            {children.icon}
          </Box>
          {children.title}
        </FlexWrapp>
      </Link>
    ))
  );
}

export default LinkCom;
const FlexWrapp = styled(Flex)`
  transition: 0.2s all;
  margin-right: 1rem;
  padding: 1rem 1.5rem;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0 2rem 2rem 0;
  font-weight: 500;

  &:hover {
    background: rgba(26, 115, 232, 0.122);
    cursor: pointer;
  }
`;
