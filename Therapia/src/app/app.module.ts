import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingpageHomeComponent } from './loadingpage-home/loadingpage-home.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { FooterComponent } from './footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { Section5Component } from './section5/section5.component';
import { LoginComponent } from './login/login.component';
import { RecoveryTeamComponent } from './recovery-team/recovery-team.component';
import { TrainerTeamComponent } from './trainer-team/trainer-team.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientJoinOptionsComponent } from './patient-join-options/patient-join-options.component';
import { PatientTrackerComponent } from './patient-tracker/patient-tracker.component';
import { MysessionsComponent } from './mysessions/mysessions.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { MySessionspreviousComponent } from './my-sessionsprevious/my-sessionsprevious.component';
import { MySessionsrequestsComponent } from './my-sessionsrequests/my-sessionsrequests.component';
import { MySessionswalletComponent } from './my-sessionswallet/my-sessionswallet.component';
import { MySessionsupcomingComponent } from './my-sessionsupcoming/my-sessionsupcoming.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OurTherapistsComponent } from './our-therapists/our-therapists.component';
import { TherapistFiltersComponent } from './therapist-filters/therapist-filters.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupConfirmEmailComponent } from './signup-confirm-email/signup-confirm-email.component';
import { SignupCompleteProfileComponent } from './signup-complete-profile/signup-complete-profile.component';
import { ContactUsThankYouComponent } from './contact-us-thank-you/contact-us-thank-you.component';
// import { ChartsModule } from 'ng2-charts';
import { NgChartsModule } from 'ng2-charts';
import { PatientProfileEditComponent } from './patient-profile-edit/patient-profile-edit.component';
import { PhysiotherapistSignupComponent } from './physiotherapist-signup/physiotherapist-signup.component';
import { TrainerSignupComponent } from './trainer-signup/trainer-signup.component';
import { NutritionistSignupComponent } from './nutritionist-signup/nutritionist-signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MySessionProfileEditComponent } from './my-session-profile-edit/my-session-profile-edit.component';
import { PatientMenuComponent } from './patient-menu/patient-menu.component';
import { MySessionDashbordComponent } from './my-session-dashbord/my-session-dashbord.component';
import { MySessionGuidelineComponent } from './my-session-guideline/my-session-guideline.component';
import { ProffesionalsBookComponent } from './proffesionals-book/proffesionals-book.component';




@NgModule({
  declarations: [
    AppComponent,
    LoadingpageHomeComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    FooterComponent,
    Section5Component,
    LoginComponent,
    RecoveryTeamComponent,
    TrainerTeamComponent,
    SignupComponent,
    NavbarComponent,
    PatientJoinOptionsComponent,
    PatientTrackerComponent,
    MysessionsComponent,
    UpcomingComponent,
    MySessionspreviousComponent,
    MySessionsrequestsComponent,
    MySessionswalletComponent,
    MySessionsupcomingComponent,
    HomePageComponent,
    OurTherapistsComponent,
    TherapistFiltersComponent,
    SignupConfirmEmailComponent,
    SignupCompleteProfileComponent,
    ContactUsThankYouComponent,
    PatientProfileEditComponent,
    PhysiotherapistSignupComponent,
    TrainerSignupComponent,
    NutritionistSignupComponent,
    ForgotPasswordComponent,
    MySessionProfileEditComponent,
    PatientMenuComponent,
    MySessionDashbordComponent,
    MySessionGuidelineComponent,
    ProffesionalsBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // ChartsModule,
    NgChartsModule
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
