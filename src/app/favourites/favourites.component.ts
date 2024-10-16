import { Component } from '@angular/core';
import { Photo, RANDOM_PHOTOS } from '../random-photos';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css',
})
export class FavouritesComponent {
  likedphotos: Photo[] = [];

  constructor() {
    this.likedphotos = RANDOM_PHOTOS.filter((photo) => photo.liked === true);
  }
}
