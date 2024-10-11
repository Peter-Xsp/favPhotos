import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { RANDOM_PHOTOS } from './random-photos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fav-pics-app';

  selectedPhoto = RANDOM_PHOTOS[0];

  public get photoPath(): string {
    return this.selectedPhoto.url;
  }

  onSelectUser() {
    console.log('Clicked!');
  }
}
