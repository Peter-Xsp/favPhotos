import { Component } from '@angular/core';

import { PhotoComponent } from '../photo/photo.component';
import { Photo } from '../photo/photo.module';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css',
})
export class PhotosComponent {
  constructor(private photosServices: PhotosService) {}

  photos: Photo[] = this.photosServices.RANDOM_PHOTOS;

  onSelectPhoto(photo: Photo) {
    photo.liked = !photo.liked;
  }
}
