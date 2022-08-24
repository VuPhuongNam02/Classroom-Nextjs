import type { NextPage } from "next";
import dynamic from "next/dynamic";

const ClassDetailContainer = dynamic(() => import("@/containers/ClassDetail"), {
  ssr: false,
});

const ClassDetail: NextPage = () => <ClassDetailContainer />;

export default ClassDetail;
