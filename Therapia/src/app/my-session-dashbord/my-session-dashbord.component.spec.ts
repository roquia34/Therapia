import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySessionDashbordComponent } from './my-session-dashbord.component';

describe('MySessionDashbordComponent', () => {
  let component: MySessionDashbordComponent;
  let fixture: ComponentFixture<MySessionDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySessionDashbordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySessionDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
