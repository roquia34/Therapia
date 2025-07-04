import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiotherapistSignupComponent } from './physiotherapist-signup.component';

describe('PhysiotherapistSignupComponent', () => {
  let component: PhysiotherapistSignupComponent;
  let fixture: ComponentFixture<PhysiotherapistSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhysiotherapistSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysiotherapistSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
