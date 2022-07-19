import React from "react";
import CContainer from "@/components/base/CContainer";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

function LayoutMain({ children }: Props) {
  return (
    <>
      <CContainer>{children}</CContainer>
    </>
  );
}

export default LayoutMain;
