import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySessionswalletComponent } from './my-sessionswallet.component';

describe('MySessionswalletComponent', () => {
  let component: MySessionswalletComponent;
  let fixture: ComponentFixture<MySessionswalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySessionswalletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySessionswalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
