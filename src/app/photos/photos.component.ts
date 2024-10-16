import { Component } from '@angular/core';

import { Photo, RANDOM_PHOTOS } from '../random-photos';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css',
})
export class PhotosComponent {
  photos: Photo[] = RANDOM_PHOTOS;
  onSelectPhoto(photo: Photo) {
    photo.liked = !photo.liked;
  }
}
