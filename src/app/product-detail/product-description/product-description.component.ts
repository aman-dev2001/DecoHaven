import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {
  product = {
    title: 'Modern Wooden Chair',
    shortDescription:
      'A premium wooden chair with comfortable seating, smooth finish, and long-lasting durability. Perfect for home and office use.'
  };

  stars = [1, 2, 3, 4, 5];
  rating = 0;
  comment = '';

  reviews = [
    {
      user: 'Rahul Sharma',
      rating: 5,
      comment: 'Excellent quality product! Worth the price. Highly recommended!',
      likes: 25,
      dislikes: 3,
      time: '2 days ago'
    },
    {
      user: 'Priya Verma',
      rating: 4,
      comment: 'Good product, packaging was also nice. Could be slightly cheaper.',
      likes: 18,
      dislikes: 2,
      time: '4 days ago'
    },
    {
      user: 'Amit Singh',
      rating: 3,
      comment: 'Average quality, not bad but not great either.',
      likes: 7,
      dislikes: 5,
      time: '1 week ago'
    }
  ];

  // ✅ Handles click on stars
  setRating(value: number) {
    this.rating = value;
  }

  // ✅ Like a review
  likeReview(review: any) {
    review.likes++;
  }

  // ✅ Dislike a review
  dislikeReview(review: any) {
    review.dislikes++;
  }

  // ✅ When form is submitted
  onSubmit() {
    this.submitReview();
  }

  // ✅ Handles actual review submission
  submitReview() {
    if (!this.comment.trim()) {
      alert('Please write your review before submitting!');
      return;
    }
    if (this.rating === 0) {
      alert('Please select a rating!');
      return;
    }

    const newReview = {
      user: 'Guest User',
      rating: this.rating,
      comment: this.comment,
      likes: 0,
      dislikes: 0,
      time: 'Just now'
    };

    this.reviews.unshift(newReview);
    this.comment = '';
    this.rating = 0;

    alert('✅ Thank you! Your review has been submitted.');
  }
}
