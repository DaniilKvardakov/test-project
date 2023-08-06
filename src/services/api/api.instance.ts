import {ApiService} from "./api.service.ts";
import {httpService} from "../http/http.instance.ts";

const api = new ApiService(httpService);


export { api }
