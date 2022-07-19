import ColorModeSwitcher from "@/components/ColorModeSwitcher";
import LayoutMain from "@/layouts/LayoutMain";
import React from "react";
import Image from "next/image";
import CContainer from "@/components/base/CContainer";
import CHead from "@/components/base/CHead";

function Home() {
  return (
    <>
      <CHead />
      <LayoutMain>
        <ColorModeSwitcher />
        <h1>Co Cai Con Cac</h1>
      </LayoutMain>
    </>
  );
}

export default Home;
