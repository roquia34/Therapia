import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySessionspreviousComponent } from './my-sessionsprevious.component';

describe('MySessionspreviousComponent', () => {
  let component: MySessionspreviousComponent;
  let fixture: ComponentFixture<MySessionspreviousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySessionspreviousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySessionspreviousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
