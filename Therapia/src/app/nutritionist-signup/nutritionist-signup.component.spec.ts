import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistSignupComponent } from './nutritionist-signup.component';

describe('NutritionistSignupComponent', () => {
  let component: NutritionistSignupComponent;
  let fixture: ComponentFixture<NutritionistSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionistSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionistSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
