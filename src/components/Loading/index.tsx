import React from "react";
import CContainer from "@/components/base/CContainer";
import Image from "next/image";
import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";

function Loading() {
  return (
    <CContainer
      position="fixed"
      top={0}
      left={0}
      bg="rgba(0,0,0,0.4)"
      width="full"
      height="full"
      display="grid"
      placeItems="center"
    >
      <div>
        <Image
          src="/logo.png"
          width={200}
          height={200}
          layout="responsive"
          alt="description of image"
        />
        <WrapContainer>
          <WrapBall>
            <Ball className="ball1" />
            <Ball className="ball2" />
            <Ball className="ball3" />
          </WrapBall>
          <Text fontWeight={"400"} color="white" fontSize={"25px"}>
            Loading...
          </Text>
        </WrapContainer>
      </div>
    </CContainer>
  );
}

export default Loading;

export const WrapContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WrapBall = styled.div`
  display: flex;
`;

export const Ball = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  margin-right: 10px;
  animation: ball 0.5s ease infinite alternate;

  @keyframes ball {
    to {
      transform: translateY(-10px);
    }
  }

  &.ball2 {
    animation-delay: 0.1s;
  }

  &.ball3 {
    animation-delay: 0.2s;
  }
`;
