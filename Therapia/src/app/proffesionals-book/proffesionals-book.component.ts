import { Component } from '@angular/core';

@Component({
  selector: 'app-proffesionals-book',
  templateUrl: './proffesionals-book.component.html',
  styleUrls: ['./proffesionals-book.component.scss'],
})
export class ProffesionalsBookComponent {

  confirmationMessage = '';

  formData = {
    time: '',
    day: '',
    month: '',
    duration: 20,
    type: 'meeting'
  };

  price = 0;

  constructor() {
    this.updatePrice(); // عند التحميل احسب السعر الأولي
  }

  updatePrice() {
    // كل 10 دقائق = 20 دولار
    this.price = (this.formData.duration / 10) * 20;
  }

  confirmBooking() {
    console.log('Booking data sent to admin:', this.formData);
    alert('Successfully Confirmed ✅');
   
    
  }
  isFormValid(): boolean {
  const { time, day, month, duration, type } = this.formData;
  return !!(time && day && month && duration && type);
}

}
