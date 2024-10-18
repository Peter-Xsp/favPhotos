import { Injectable } from '@angular/core';

import { Photo } from '../photo/photo.module';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  RANDOM_PHOTOS: Photo[] = [];
  likedPhotos: Photo[] = [];

  constructor() {
    this.generateRandomPhotos();
  }
  generateRandomPhotos() {
    for (let i = 1; i <= 9; i++) {
      this.RANDOM_PHOTOS.push({
        id: `p${i}`,
        url: `https://picsum.photos/200/300?random=${i}`,
        liked: false,
      });
    }
  }

  refreshPhotos() {
    const newPhotos: Photo[] = [];
    for (let i = 1; i <= 9; i++) {
      const photo = this.likedPhotos.find((p) => p.id === `p${i}`);
      if (photo) {
        newPhotos.push(photo);
      } else {
        newPhotos.push({
          id: `p${i}`,
          url: `https://picsum.photos/200/300?random=${Math.floor(
            Math.random() * 1000
          )}`,
          liked: false,
        });
      }
    }
    this.RANDOM_PHOTOS = newPhotos;
  }

  getAllPhotos(): Photo[] {
    return this.RANDOM_PHOTOS;
  }

  toggleLike(photo: Photo) {
    const index = this.likedPhotos.findIndex((p) => p.id === photo.id);
    if (index > -1) {
      this.likedPhotos.splice(index, 1);
      photo.liked = false;
    } else {
      this.likedPhotos.push({ ...photo }); // Διατήρηση του αντικειμένου
      photo.liked = true;
    }
  }
}
