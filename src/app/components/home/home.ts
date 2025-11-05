import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  currentIndex = 0;
  slides = [
    {
      image: 'group1.jpg',
      alt: 'Group 1',
      text: 'Welcome to our community group'
    },
    {
      image: 'group2.jpg',
      alt: 'Group 2',
      text: 'Discover the amazing group'
    }
  ];

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
}
