import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component {
  contactForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      this.isSubmitted = true;
      // بعد الإرسال يروح لصفحة الشكر
      this.router.navigate(['/thank-you']);
    }
  }
}
