import type { NextPage } from "next";
import dynamic from "next/dynamic";

const SettingPage = dynamic(() => import("@/containers/Setting"), {
  ssr: false,
});

const Setting: NextPage = () => <SettingPage />;

export default Setting;
