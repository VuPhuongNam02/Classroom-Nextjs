import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
};

function CHead({ title = "Classroom" }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:image" itemProp="image" content="/ny.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:image:type" content="image/jpg" />
      <meta
        name="description"
        content="App này không phải của Phương Nam đâu !"
      />
      <link rel="icon" href="/logo.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
}

export default CHead;
