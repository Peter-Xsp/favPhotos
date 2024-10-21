import { Component } from '@angular/core';
import { Photo } from '../photo/photo.module';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouritesService } from '../favourites/favourites.service';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-favourite-photo',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './favourite-photo.component.html',
  styleUrl: './favourite-photo.component.css',
})
export class FavouritePhotoComponent {
  photo: Photo | undefined;
  constructor(
    private route: ActivatedRoute,
    private favouritesService: FavouritesService,
    private router: Router
  ) {
    const photoId = this.route.snapshot.paramMap.get('id');
    if (photoId) {
      this.photo = this.favouritesService
        .getFavouritePhotos()
        .find((p) => p.id === photoId);
    }
  }

  deletePhoto() {
    if (this.photo) {
      this.favouritesService.deleteFavourite(this.photo);
      this.router.navigate(['/favourites']);
    }
  }

  cancel() {
    this.router.navigate(['/favourites']);
  }
}
