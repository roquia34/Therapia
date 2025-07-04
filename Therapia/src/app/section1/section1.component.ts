import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.scss'
})
export class Section1Component implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // يمكنك إضافة أي منطق تحتاجه عند تحميل الكومبوننت
  }

  // للانتقال لصفحة تسجيل الدخول
  openLogin(): void {
    this.router.navigate(['/login']);
  }

  // للانتقال لصفحة إنشاء الحساب
  openSignUp(): void {
    this.router.navigate(['/signup']);
  }

  // دالة إضافية للعودة للصفحة الرئيسية (إذا احتجتها)
  goHome(): void {
    this.router.navigate(['/home']);
  }
}