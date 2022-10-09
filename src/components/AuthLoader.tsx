import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import cApi from "@/api";

function AuthLoader({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { data: profile, isLoading } = useQuery(
    ["authControllerUserProfile"],
    () => cApi.api.authControllerUserProfile()
  );
  const { data: callbackData } = useQuery(["authControllerCallback"], () =>
    cApi.api.authControllerCallback()
  );
  const isUser = !!profile?.data;
  console.log("callbackData", callbackData);
  // React.useEffect(() => {
  //   (async () => {
  //     // if (isLoading) return;
  //     // if (!isUser) {
  //     //   const callbackUrl = window.location.href;
  //     //   await router.push({
  //     //     pathname: `http://localhost:3000/api/user/login`,
  //     //     query: { callback_url: callbackUrl },
  //     //   });
  //     // }
  //   })();
  // }, [isUser]);

  if (isUser) {
    return children;
  }
}

export default AuthLoader;
