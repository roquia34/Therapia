import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  // إنشاء النموذج مع الدور
  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }

  // دالة تسجيل الدخول
  onLogin(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      const role = loginData.role;
      const dummyId = 123;

      // تخزين بيانات الدخول في localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', role);
      localStorage.setItem('userId', dummyId.toString());

      console.log('Login Data:', loginData);

      // التوجيه حسب الدور
      if (role === 'patient') {
        this.router.navigate([`/patient/${dummyId}`]);
      } else {
        this.router.navigate(['/dashboard']);
      }
    } else {
      this.markFormGroupTouched();
    }
  }

  // لجعل جميع الحقول تظهر الأخطاء
  markFormGroupTouched(): void {
    Object.keys(this.loginForm.controls).forEach(key => {
      this.loginForm.get(key)?.markAsTouched();
    });
  }

  // إغلاق النموذج
  closeLogin(): void {
    this.router.navigate(['/home']);
  }

  // فتح صفحة تسجيل حساب
  goToSignUp(): void {
    this.router.navigate(['/signup']);
  }

  // نسيان كلمة المرور
  forgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }

  // تسجيل الدخول الاجتماعي (مكانك تضيف api لاحقًا)
  loginWithGoogle(): void {
    console.log('Login with Google');
  }

  loginWithFacebook(): void {
    console.log('Login with Facebook');
  }

  loginWithGithub(): void {
    console.log('Login with Github');
  }

  loginWithLinkedin(): void {
    console.log('Login with LinkedIn');
  }
}
