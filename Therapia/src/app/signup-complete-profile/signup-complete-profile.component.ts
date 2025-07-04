import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup-complete-profile',
  templateUrl: './signup-complete-profile.component.html',
  styleUrls: ['./signup-complete-profile.component.scss']
})
export class SignupCompleteProfileComponent {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder , private router: Router) {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    
   if (this.signupForm.valid) {
  // ممكن تخزني بياناته مؤقتًا لو عايزة
  console.log(this.signupForm.value);
  this.router.navigate(['/confirm-email']);  // ← وديه للصفحة دي
}

  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  
  
}
