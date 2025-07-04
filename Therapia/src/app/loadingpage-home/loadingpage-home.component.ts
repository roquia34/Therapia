import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
 





@Component({
  selector: 'app-loadingpage-home',
  templateUrl: './loadingpage-home.component.html',
  styleUrls: ['./loadingpage-home.component.scss']
})
export class LoadingpageHomeComponent implements OnInit {

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

 

