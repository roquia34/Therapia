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

  // إنشاء النموذج مع التحقق من صحة البيانات
  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // دالة تسجيل الدخول
  onLogin(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('Login Data:', loginData);
      
      // هنا يمكنك إضافة منطق التحقق من البيانات مع الخادم
      // مثال: this.authService.login(loginData).subscribe(...)
      
      // في حالة نجاح تسجيل الدخول
      this.router.navigate(['/patient/123']); // أو أي صفحة تريد التوجه إليها
      
    } else {
      // وضع علامة على جميع الحقول كـ touched لإظهار رسائل الخطأ
      this.markFormGroupTouched();
    }
  }

  // وضع علامة على جميع حقول النموذج
  markFormGroupTouched(): void {
    Object.keys(this.loginForm.controls).forEach(key => {
      this.loginForm.get(key)?.markAsTouched();
    });
  }

  // إغلاق نموذج تسجيل الدخول والعودة للصفحة الرئيسية
  closeLogin(): void {
    this.router.navigate(['/home']);
  }

  // التوجه لصفحة إنشاء حساب جديد
  goToSignUp(): void {
    this.router.navigate(['/signup']);
  }

  // نسيت كلمة المرور
  forgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }

  // تسجيل الدخول بالوسائط الاجتماعية
  loginWithGoogle(): void {
    console.log('Login with Google');
    // إضافة منطق تسجيل الدخول بـ Google
  }

  loginWithFacebook(): void {
    console.log('Login with Facebook');
    // إضافة منطق تسجيل الدخول بـ Facebook
  }

  loginWithGithub(): void {
    console.log('Login with Github');
    // إضافة منطق تسجيل الدخول بـ Github
  }

  loginWithLinkedin(): void {
    console.log('Login with LinkedIn');
    // إضافة منطق تسجيل الدخول بـ LinkedIn
  }
}
