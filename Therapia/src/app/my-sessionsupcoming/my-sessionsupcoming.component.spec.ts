import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySessionsupcomingComponent } from './my-sessionsupcoming.component';

describe('MySessionsupcomingComponent', () => {
  let component: MySessionsupcomingComponent;
  let fixture: ComponentFixture<MySessionsupcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySessionsupcomingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySessionsupcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
