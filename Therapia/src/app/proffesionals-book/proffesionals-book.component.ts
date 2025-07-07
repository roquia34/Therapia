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
    min: '',
    sec: '',
    type: 'meeting'
  };

 
  confirmBooking() {
  // هنا تبعتي البيانات للـ Admin مثلاً API أو مؤقتاً console
  console.log('Booking data sent to admin:', this.formData);

  // ✅ عرض رسالة تنبيه (Alert)
  alert('تم التأكيد بنجاح ✅');

}

}