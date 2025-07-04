import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCompleteProfileComponent } from './signup-complete-profile.component';

describe('SignupCompleteProfileComponent', () => {
  let component: SignupCompleteProfileComponent;
  let fixture: ComponentFixture<SignupCompleteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupCompleteProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupCompleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
