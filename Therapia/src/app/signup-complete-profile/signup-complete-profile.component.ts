import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-complete-profile',
  templateUrl: './signup-complete-profile.component.html',
  styleUrls: ['./signup-complete-profile.component.scss']
})
export class SignupCompleteProfileComponent implements OnInit {

  signupForm: FormGroup;
  role: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute  
  ) {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.role = this.route.snapshot.paramMap.get('role') || '';
    console.log("User selected role:", this.role);
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      
      this.router.navigate(['/confirm-email']);
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
