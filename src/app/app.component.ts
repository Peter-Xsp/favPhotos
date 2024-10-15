import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { PhotosComponent } from './photos/photos.component';
import { Photo, RANDOM_PHOTOS } from './random-photos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PhotosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  photos: Photo[] = RANDOM_PHOTOS;
  onSelectPhoto(photo: Photo) {
    photo.liked = !photo.liked;
  }
}
