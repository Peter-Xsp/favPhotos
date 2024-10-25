import { Component } from '@angular/core';

import { PhotoComponent } from '../photo/photo.component';
import { Photo } from '../photo/photo.module';
import { PhotosService } from './photos.service';
import { FavouritesService } from '../favourites/favourites.service';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css',
})
export class PhotosComponent {
  photos: Photo[] = [];

  constructor(
    private photosServices: PhotosService,
    private favouritesService: FavouritesService
  ) {
    this.loadPhotos();
  }

  loadPhotos() {
    this.photosServices.generateRandomPhotos().subscribe((photos) => {
      this.photos = photos;
    });
  }

  onPhotoLike(liked: boolean, photo: Photo) {
    photo.liked = liked;
    this.favouritesService.toggleLike(photo);
  }

  refreshPage() {
    this.loadPhotos();
  }
}
