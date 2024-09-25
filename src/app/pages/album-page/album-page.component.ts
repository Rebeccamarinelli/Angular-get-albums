import { Component } from '@angular/core';
import { AlbumServiceService } from '../../services/album-service.service';
import { IAlbum, IUserResponse } from '../../model/album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrl: './album-page.component.css'
})
export class AlbumPageComponent {

  
  albumList:IAlbum[];

  constructor(private albumService: AlbumServiceService,
    private router: Router
  ){
    this.albumService.getAlbums().subscribe((response:IUserResponse) => {
      this.albumList = response;
    })
  }

  onGoToDetailsPage(Id: number) {
    // /details/1
    // navigate è il metodo per navigare da una rotta all'altra
    // è accetta come argomento i segmenti del path di navigazione
    this.router.navigate(['albums', Id])
  }



}
