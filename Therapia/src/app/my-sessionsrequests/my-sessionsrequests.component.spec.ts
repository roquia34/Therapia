import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySessionsrequestsComponent } from './my-sessionsrequests.component';

describe('MySessionsrequestsComponent', () => {
  let component: MySessionsrequestsComponent;
  let fixture: ComponentFixture<MySessionsrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySessionsrequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySessionsrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
