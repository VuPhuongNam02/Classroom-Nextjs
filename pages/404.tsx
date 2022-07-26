import type { NextPage } from "next";
import dynamic from "next/dynamic";

const NotFoundPage = dynamic(() => import("@/containers/NotFound"), {
  ssr: false,
});

const NotFound: NextPage = () => <NotFoundPage />;

export default NotFound;
