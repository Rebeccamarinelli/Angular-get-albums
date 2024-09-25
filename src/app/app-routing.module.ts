import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { AlbumDitailsComponent } from './pages/album-ditails/album-ditails.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'albums',
    component: AlbumPageComponent
  },
  {
    path: 'albums/:id',
    component: AlbumDitailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
