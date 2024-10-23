import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css',
})
export class PhotoComponent {
  url = input.required<string>();
  id = input.required<string>();
  liked = input.required<boolean>();

  select = output<boolean>();

  onSelectPhoto() {
    this.select.emit(!this.liked());
  }
}
