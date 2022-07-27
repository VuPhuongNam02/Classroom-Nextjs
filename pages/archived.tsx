import type { NextPage } from "next";
import dynamic from "next/dynamic";

const ArchivedPage = dynamic(() => import("@/containers/Archived"), {
  ssr: false,
});

const Archived: NextPage = () => <ArchivedPage />;

export default Archived;
