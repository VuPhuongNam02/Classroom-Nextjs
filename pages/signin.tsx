import type { NextPage } from "next";
import dynamic from "next/dynamic";

const SigninContainer = dynamic(() => import("@/containers/Signin"), {
  ssr: false,
});

const SigninPage: NextPage = () => <SigninContainer />;

export default SigninPage;
