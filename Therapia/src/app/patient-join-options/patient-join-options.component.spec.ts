import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientJoinOptionsComponent } from './patient-join-options.component';

describe('PatientJoinOptionsComponent', () => {
  let component: PatientJoinOptionsComponent;
  let fixture: ComponentFixture<PatientJoinOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientJoinOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientJoinOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
