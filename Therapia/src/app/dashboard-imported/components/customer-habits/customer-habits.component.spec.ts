import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHabitsComponent } from './customer-habits.component';

describe('CustomerHabitsComponent', () => {
  let component: CustomerHabitsComponent;
  let fixture: ComponentFixture<CustomerHabitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerHabitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




