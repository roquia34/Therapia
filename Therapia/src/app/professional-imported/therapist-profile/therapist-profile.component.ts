import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Comment {
  text: string;
  rating: number;
  hidden: boolean;
}

@Component({
  selector: 'app-therapist-profile',
  standalone: true,
  templateUrl: './therapist-profile.component.html',
  styleUrls: ['./therapist-profile.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class TherapistProfileComponent {
  selectedTab: string = 'about';

  commentText = '';
  rating = 0;
  hideName = false;
  comments: Comment[] = [];
  stars = Array(5).fill(0);
todayDate: any;

  setRating(r: number) {
    this.rating = r;
  }

 submitComment() {
  if (!this.commentText.trim()) return;

  this.comments.unshift({
    text: this.commentText,
    rating: this.rating,
    hidden: this.hideName
  });

  this.commentText = '';
  this.rating = 0;
  this.hideName = false;

  setTimeout(() => {
    const list = document.querySelector('.reviews');
    list?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, 0);
}


  selectTab(tab: string) {
    this.selectedTab = tab;
    console.log('Selected Tab:', tab);
  }
}
