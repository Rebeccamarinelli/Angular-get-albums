import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAlbum } from '../../model/album.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() cardAlbumList:any

  @Output() onGoToDetails: EventEmitter<number> = new EventEmitter();


  goDitails(album:IAlbum) {
    this.onGoToDetails.emit(album.id)
  }

}
