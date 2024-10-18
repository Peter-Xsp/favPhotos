import { Injectable } from '@angular/core';

import { Photo } from '../photo/photo.module';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  RANDOM_PHOTOS: Photo[] = [];

  constructor() {
    for (let i = 1; i <= 9; i++) {
      this.RANDOM_PHOTOS.push({
        id: `p${i}`,
        url: `https://picsum.photos/200/300?random=${i}`,
        liked: false,
      });
    }
  }
}
