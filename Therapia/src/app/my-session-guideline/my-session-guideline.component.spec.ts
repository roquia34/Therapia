import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySessionGuidelineComponent } from './my-session-guideline.component';

describe('MySessionGuidelineComponent', () => {
  let component: MySessionGuidelineComponent;
  let fixture: ComponentFixture<MySessionGuidelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySessionGuidelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySessionGuidelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
