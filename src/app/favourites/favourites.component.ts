import { Component } from '@angular/core';

import { Photo, RANDOM_PHOTOS } from '../random-photos';
import { PhotoComponent } from '../photo/photo.component';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css',
})
export class FavouritesComponent {
  likedPhotos: Photo[] = [];

  // constructor() {
  //   this.likedphotos = RANDOM_PHOTOS.filter((photo) => photo.liked === true);
  // }

  constructor(private localStorageService: LocalStorageService) {
    const savedPhotos = this.localStorageService.getItem('likedPhotos');
    if (savedPhotos) {
      this.likedPhotos = JSON.parse(savedPhotos);
    } else {
      this.likedPhotos = RANDOM_PHOTOS.filter((photo) => photo.liked === true);
    }
  }

  updateLikedPhotos() {
    const photosString = JSON.stringify(this.likedPhotos);
    this.localStorageService.setItem('likedPhotos', photosString);
  }

  onPhotoLike(photo: Photo) {
    // Toggle liked status, update the likedPhotos array, and save it
    photo.liked = !photo.liked;
    this.likedPhotos = RANDOM_PHOTOS.filter((photo) => photo.liked === true);
    this.updateLikedPhotos();
  }
}
