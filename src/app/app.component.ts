import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { PhotosComponent } from './photos/photos.component';
import { RANDOM_PHOTOS } from './random-photos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PhotosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  photos = RANDOM_PHOTOS;

  onSelectPhoto(liked: boolean) {
    liked = !liked;
    console.log(liked);
  }
}
