import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { PhotoComponent } from '../photo/photo.component';
import { LocalStorageService } from './local-storage.service';
import { Photo } from '../photo/photo.module';
import { PhotosService } from '../photos/photos.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css',
})
export class FavouritesComponent {
  likedPhotos: Photo[] = [];

  constructor(
    private photosService: PhotosService,
    private localStorageService: LocalStorageService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const savedPhotos = this.localStorageService.getItem('likedPhotos');
      if (savedPhotos) {
        this.likedPhotos = JSON.parse(savedPhotos);
      } else {
        this.likedPhotos = photosService.RANDOM_PHOTOS.filter(
          (photo) => photo.liked === true
        );
      }
    } else {
      this.likedPhotos = photosService.RANDOM_PHOTOS.filter(
        (photo) => photo.liked === true
      );
    }
  }

  updateLikedPhotos() {
    const photosString = JSON.stringify(this.likedPhotos);
    if (isPlatformBrowser(this.platformId)) {
      this.localStorageService.setItem('likedPhotos', photosString);
    }
  }

  onPhotoLike(photo: Photo) {
    photo.liked = !photo.liked;
    this.likedPhotos = this.photosService.RANDOM_PHOTOS.filter(
      (photo) => photo.liked === true
    );
    this.updateLikedPhotos();
  }
}
