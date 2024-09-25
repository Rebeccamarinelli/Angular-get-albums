export type IUserResponse = IAlbum[]

export interface IAlbum {
  userId: number
  id: number
  title: string
}

export type IPhotoResponse = IPhoto[]

export interface IPhoto{
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}


