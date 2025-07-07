import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm!: FormGroup;

  constructor(private fb: FormBuilder , private router: Router) {}

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.forgotForm.get('email')!;
  }

  onSubmit(): void {
    if (this.forgotForm.valid) {
      const email = this.forgotForm.value.email;
      console.log('Reset password for:', email);
      // هنا تضيفي منطق إرسال الرابط للإيميل
      alert("If the email exists, a reset link has been sent.");
    }
  }

  goBackToLogin(): void {
  this.router.navigate(['/login']);
}
}
