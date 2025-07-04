import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySessionProfileEditComponent } from './my-session-profile-edit.component';

describe('MySessionProfileEditComponent', () => {
  let component: MySessionProfileEditComponent;
  let fixture: ComponentFixture<MySessionProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySessionProfileEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySessionProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
