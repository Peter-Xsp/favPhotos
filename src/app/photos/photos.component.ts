import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css',
})
export class PhotosComponent {
  url = input.required<string>();
  id = input.required<string>();
  liked = input.required<boolean>();

  select = output<boolean>();

  photoPath = computed(() => {
    return this.url();
  });

  onSelectPhoto() {
    this.select.emit(this.liked());
  }
}
