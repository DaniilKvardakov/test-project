type Album =  {
    key: number;
    nestedData: PhotosList;
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

type Photo = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}



export type PhotosList = Photo[];
export type AlbumList = Album[];


