import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumServiceService } from '../../services/album-service.service';
import { IPhoto } from '../../model/album.model';

@Component({
  selector: 'app-album-ditails',
  templateUrl: './album-ditails.component.html',
  styleUrl: './album-ditails.component.css'
})
export class AlbumDitailsComponent {

  photoList:IPhoto;

  constructor(private activateRoute: ActivatedRoute,
    private photoService: AlbumServiceService
  ){

    this.activateRoute.params.subscribe((params)=>{
      this.photoService.getPhoto(params.id).subscribe((response:IPhoto)=>{
        console.log(response)
        this.photoList = response
      })
    
    })
  
  }
}
