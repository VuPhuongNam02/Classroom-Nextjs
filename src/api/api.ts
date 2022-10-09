import { AxiosRequestConfig } from "axios";

import qs from "qs";
import { Api } from "@/api/services";

const securityWorker = async () => {
  return {
    headers: {
      accept: "application/json;charset=UTF-8",
      "Content-type": "application/json",
    },
  };
};

export const api = (props: AxiosRequestConfig) => {
  return new Api({
    securityWorker,
    withCredentials: true,
    paramsSerializer: (params: any) =>
      params ? qs.stringify(params, { arrayFormat: "repeat" }) : "",
    ...props,
  });
};
