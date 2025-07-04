import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupConfirmEmailComponent } from './signup-confirm-email.component';

describe('SignupConfirmEmailComponent', () => {
  let component: SignupConfirmEmailComponent;
  let fixture: ComponentFixture<SignupConfirmEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupConfirmEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupConfirmEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
