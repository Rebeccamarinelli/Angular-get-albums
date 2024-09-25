import { Component, Input,} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  albumIsActive:boolean;
  isVisible:boolean = true;
  
  notVisible(){
    this.isVisible = false
    this.albumIsActive = true
  }
}
