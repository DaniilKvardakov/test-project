import axios, {AxiosResponse} from "axios";


export default class HTTP {
    static get(url: string): Promise<AxiosResponse<any>>  {
        return axios({
            method: 'get',
            url: url,
        })
    }
    static post(url: string, data: any): Promise<AxiosResponse<any>> {
        return axios({
            method: 'post',
            url: url,
            data
        })
    }
}