import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistFiltersComponent } from './therapist-filters.component';

describe('TherapistFiltersComponent', () => {
  let component: TherapistFiltersComponent;
  let fixture: ComponentFixture<TherapistFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TherapistFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TherapistFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
