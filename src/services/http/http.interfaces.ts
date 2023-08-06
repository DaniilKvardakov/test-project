import {AxiosResponse, AxiosStatic} from "axios/index"

export type FetchingLibrary = AxiosStatic;
export type FetchingLibraryResponse<T, D = any> = AxiosResponse<T,D>;
