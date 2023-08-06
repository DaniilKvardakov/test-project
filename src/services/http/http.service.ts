import {FetchingLibrary, FetchingLibraryResponse} from "./http.interfaces.ts";



// использовать export заместо export default, большая удобность при импорте
export class HTTPService {
    fetchingLibrary: FetchingLibrary
    constructor(fetchingLibrary: FetchingLibrary ) {
        this.fetchingLibrary = fetchingLibrary
    }
    get<ResponseType>(url: string): Promise<FetchingLibraryResponse<ResponseType>>  {
        return this.fetchingLibrary({
            method: 'get',
            url: url,
        })
    }
    post<ResponseType>(url: string, data: any): Promise<FetchingLibraryResponse<ResponseType>> {
        return this.fetchingLibrary({
            method: 'post',
            url: url,
            data
        })
    }
}