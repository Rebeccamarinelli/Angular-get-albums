import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhoto, IUserResponse} from '../model/album.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AlbumServiceService {

  baseUrlAlbum = 'https://jsonplaceholder.typicode.com/albums'
  baseUrlAlbumPhoto =`https://jsonplaceholder.typicode.com/photos?albumId=`

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<IUserResponse>{
    return this.http.get<IUserResponse>(this.baseUrlAlbum)
  }

   getPhoto(id:number): Observable<IPhoto>{
    return this.http.get<IPhoto>(this.baseUrlAlbumPhoto + id)
   }




}
