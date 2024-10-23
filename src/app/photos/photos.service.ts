import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Photo } from '../photo/photo.module';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  RANDOM_PHOTOS: Photo[] = [];
  likedPhotos: Photo[] = [];

  constructor(private http: HttpClient) {
    this.generateRandomPhotos();
  }

  generateRandomPhotos() {
    const requests: Observable<Photo>[] = [];

    for (let i = 1; i <= 9; i++) {
      const photoUrl = `https://picsum.photos/200/300?random=${i}`;
      const photoRequest = this.resolvePhotoUrl(photoUrl).pipe(
        map((actuallUrl) => ({
          id: this.generateUniqueId(),
          url: actuallUrl,
          liked: false,
        }))
      );
      requests.push(photoRequest);
    }

    forkJoin(requests).subscribe((photos: Photo[]) => {
      this.RANDOM_PHOTOS = photos;
    });
  }

  getAllPhotos(): Photo[] {
    return this.RANDOM_PHOTOS;
  }

  resolvePhotoUrl(photoUrl: string): Observable<string> {
    return this.http
      .get(photoUrl, { observe: 'response', responseType: 'blob' })
      .pipe(map((response) => response.url!));
  }

  private generateUniqueId(): string {
    return 'photo-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
  }
}
