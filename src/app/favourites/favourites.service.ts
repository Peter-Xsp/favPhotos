import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Photo } from '../photo/photo.module';
import { PhotosService } from '../photos/photos.service';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  FAVOURITE_PHOTOS: Photo[] = [];

  constructor(
    private photosService: PhotosService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const savedFavourites = localStorage.getItem('favouritePhotos');
      if (savedFavourites) {
        this.FAVOURITE_PHOTOS = JSON.parse(savedFavourites);
      }
    }
  }

  updateFavourites() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(
        'favouritePhotos',
        JSON.stringify(this.FAVOURITE_PHOTOS)
      );
    }
  }

  toggleLike(photo: Photo) {
    const index = this.FAVOURITE_PHOTOS.findIndex((p) => p.id === photo.id);
    if (index > -1) {
      this.FAVOURITE_PHOTOS.splice(index, 1);
    } else {
      const likedPhoto = {
        ...photo,
      };
      this.FAVOURITE_PHOTOS.push(likedPhoto);
    }
    this.updateFavourites();
  }

  getFavouritePhotos(): Photo[] {
    return this.FAVOURITE_PHOTOS;
  }
}
