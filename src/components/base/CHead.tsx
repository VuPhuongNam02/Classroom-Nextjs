import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
};

function CHead({ title = "Classroom" }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="manifest"
        href="https://classroom-liam.vercel.app/manifest.json"
      />
      <meta
        property="og:image"
        content="https://classroom-liam.vercel.app/ny.jpg"
      />
      <meta
        name="description"
        content="App này không phải của Phương Nam đâu !"
      />
      <meta name="keywords" content="Phương Nam yêu Hương Lan" />
      <link rel="icon" href="https://classroom-liam.vercel.app/logo.png" />
    </Head>
  );
}

export default CHead;
