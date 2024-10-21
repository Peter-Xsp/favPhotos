import { Component } from '@angular/core';

import { PhotoComponent } from '../photo/photo.component';
import { Photo } from '../photo/photo.module';
import { FavouritesService } from './favourites.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [PhotoComponent, RouterModule],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css',
})
export class FavouritesComponent {
  likedPhotos: Photo[] = [];

  constructor(private favouritesService: FavouritesService) {
    this.likedPhotos = this.favouritesService.getFavouritePhotos();
  }
}
