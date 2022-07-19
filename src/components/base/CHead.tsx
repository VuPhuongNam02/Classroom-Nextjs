import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
};

function CHead({ title = "Classroom" }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/logo.png" />
    </Head>
  );
}

export default CHead;
