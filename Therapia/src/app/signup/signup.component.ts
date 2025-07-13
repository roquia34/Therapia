import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  
  // أنواع المستخدمين
  userTypes = [
    { id: 0, name: 'Patient', route: 'patient-signup', image: 'signup/patient.jpeg' },
    { id: 1, name: 'Physiotherapist', route: 'physiotherapist-signup', image: 'signup/doctor.jpeg' },
    { id: 2, name: 'Trainer', route: 'trainer-signup', image: 'signup/Physiotherapist.jpeg' },
    { id: 3, name: 'Nutritionist', route: 'nutritionist-signup', image: 'signup/Nutritionist.jpeg' }
  ];

  constructor(private router: Router) {}

  // اختيار نوع المستخدم والتوجه للصفحة المناسبة
  // chooseKind(userTypeId: number): void {
  //   const selectedType = this.userTypes[userTypeId];
    
  //   if (selectedType) {
  //     console.log(`Selected user type: ${selectedType.name}`);
      
  //     // حفظ نوع المستخدم في الذاكرة المؤقتة أو localStorage
  //     sessionStorage.setItem('selectedUserType', JSON.stringify(selectedType));
      
  //     // التوجه لصفحة التسجيل المناسبة
  //     this.router.navigate([`/${selectedType.route}`], {
  //       state: { 
  //         userType: selectedType.name,
  //         userTypeId: userTypeId 
  //       }
  //     });
  //   }
  // }
  chooseKind(role: string) {
  this.router.navigate(['/signup', role]);
}

  // إغلاق صفحة التسجيل والعودة للصفحة الرئيسية
  closeSignUp(): void {
    this.router.navigate(['/home']);
  }

  // التوجه لصفحة تسجيل الدخول
  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  // العودة للصفحة الرئيسية
  goBack(): void {
    this.router.navigate(['/home']);
  }
}