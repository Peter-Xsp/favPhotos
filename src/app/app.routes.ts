import { Routes } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { PhotosComponent } from './photos/photos.component';

export const routes: Routes = [
  {
    path: '', //Start page
    component: PhotosComponent,
  },
  {
    path: 'favourites', //My liked photos
    component: FavouritesComponent,
  },
];
