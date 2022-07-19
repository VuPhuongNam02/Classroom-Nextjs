import type { NextPage } from "next";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/containers/Home"), { ssr: false });

const Home: NextPage = () => <HomePage />;

export default Home;
