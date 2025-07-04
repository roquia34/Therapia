import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTrackerComponent } from './patient-tracker.component';

describe('PatientTrackerComponent', () => {
  let component: PatientTrackerComponent;
  let fixture: ComponentFixture<PatientTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
