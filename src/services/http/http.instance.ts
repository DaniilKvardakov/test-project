import {HTTPService} from "./http.service.ts";
import axios from "axios";


const httpService = new HTTPService(axios);

export {httpService};