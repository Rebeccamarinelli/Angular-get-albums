import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isActiveHome = true
  isActiveAlbum = false

  addActiveClass(){
    this.isActiveAlbum = !this.isActiveAlbum
    this.isActiveHome = !this.isActiveHome
  }

}
