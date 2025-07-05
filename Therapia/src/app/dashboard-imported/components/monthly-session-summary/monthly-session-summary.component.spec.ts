import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySessionSummaryComponent } from './monthly-session-summary.component';

describe('MonthlySessionSummaryComponent', () => {
  let component: MonthlySessionSummaryComponent;
  let fixture: ComponentFixture<MonthlySessionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlySessionSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlySessionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
