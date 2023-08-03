import axios, {AxiosError, AxiosResponse} from "axios";


export default class HTTP {
    static get(url: string, headers: any): Promise<AxiosResponse<any>>  {
        return axios({
            method: 'get',
            headers,
            url: url,
        })
    }
    static post(url: string, data: any, headers? : any): Promise<AxiosResponse<any>> {
        return axios({
            method: 'post',
            url: url,
            headers,
            data
        })
    }
}