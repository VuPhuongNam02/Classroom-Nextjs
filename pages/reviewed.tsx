import type { NextPage } from "next";
import dynamic from "next/dynamic";

const ReviewedPage = dynamic(() => import("@/containers/Reviewed"), {
  ssr: false,
});

const Reviewed: NextPage = () => <ReviewedPage />;

export default Reviewed;
