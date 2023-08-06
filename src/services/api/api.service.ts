import {HTTPService} from "../http/http.service.ts";
import {AlbumList} from "./api.interfaces.ts";

// добавить baseUrl в window.env config
// интересная задачка!!
export class ApiService {
    httpService: HTTPService;
    baseUrl: string = 'https://jsonplaceholder.typicode.com'
    constructor(httpService: HTTPService) {
        this.httpService = httpService;
    }
    async getAlbums(): Promise<AlbumList> {
        const response = await this.httpService.get<AlbumList>(`${this.baseUrl}/albums`);
        return response.data;
    }
}

