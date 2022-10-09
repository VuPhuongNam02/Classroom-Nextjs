import type { NextPage } from "next";
import dynamic from "next/dynamic";

const SignupPage = dynamic(() => import("@/containers/Signup"), {
  ssr: false,
});

const Signup: NextPage = () => <SignupPage />;

export default Signup;
