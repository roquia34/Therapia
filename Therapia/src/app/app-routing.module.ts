import { NgModule } from '@angular/core';
import { RouterModule, Routes  , NavigationEnd} from '@angular/router';
import { LoadingpageHomeComponent } from './loadingpage-home/loadingpage-home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Section1Component } from './section1/section1.component';
import { MysessionsComponent } from './mysessions/mysessions.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { MySessionspreviousComponent } from './my-sessionsprevious/my-sessionsprevious.component';
import { MySessionsupcomingComponent } from './my-sessionsupcoming/my-sessionsupcoming.component';
import { MySessionswalletComponent } from './my-sessionswallet/my-sessionswallet.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OurTherapistsComponent } from './our-therapists/our-therapists.component';
import { MySessionsrequestsComponent } from './my-sessionsrequests/my-sessionsrequests.component';
import { SignupConfirmEmailComponent } from './signup-confirm-email/signup-confirm-email.component';
import { SignupCompleteProfileComponent } from './signup-complete-profile/signup-complete-profile.component';
import { ContactUsThankYouComponent } from './contact-us-thank-you/contact-us-thank-you.component';
import { PatientProfileEditComponent } from './patient-profile-edit/patient-profile-edit.component';
import { PatientMenuComponent } from './patient-menu/patient-menu.component';
import { MySessionDashbordComponent } from './my-session-dashbord/my-session-dashbord.component';
import { MySessionGuidelineComponent } from './my-session-guideline/my-session-guideline.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'confirm-email', component: SignupConfirmEmailComponent },
  { path:'complete-profile', component:SignupCompleteProfileComponent},
  { path:'thank-you', component:ContactUsThankYouComponent},

  { path: 'our-therapists' , component: OurTherapistsComponent},
  
  {path: 'patient/:id',
  component: MysessionsComponent,
  children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: MySessionDashbordComponent },
      { path: 'guideline', component: MySessionGuidelineComponent },
      { path: 'upcoming', component: MySessionsupcomingComponent },
      { path: 'previous', component: MySessionspreviousComponent },
      { path: 'requests', component: MySessionsrequestsComponent },
      { path: 'wallet', component: MySessionswalletComponent},
      { path: 'profile_edit' , component: PatientProfileEditComponent},
    ]
  },


  { path: 'physiotherapist-signup', component: SignupCompleteProfileComponent },
  { path: 'trainer-signup', component: SignupCompleteProfileComponent },
  { path: 'nutritionist-signup', component: SignupCompleteProfileComponent },
  { path: 'forgot-password', component: LoginComponent },
  { path: 'patient-menu' , component: PatientMenuComponent},


   
 
  
    ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
