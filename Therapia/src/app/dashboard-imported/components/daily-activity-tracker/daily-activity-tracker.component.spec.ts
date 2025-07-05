import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyActivityTrackerComponent } from './daily-activity-tracker.component';

describe('DailyActivityTrackerComponent', () => {
  let component: DailyActivityTrackerComponent;
  let fixture: ComponentFixture<DailyActivityTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyActivityTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyActivityTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
