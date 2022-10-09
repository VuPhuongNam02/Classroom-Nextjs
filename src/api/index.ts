import {Api} from "@/api/services";
import {api} from "./api";

// @ts-ignore
const cApi: Api<unknown> = api({ baseURL: process.env.HTTP_ENDPOINT });

export default cApi;
