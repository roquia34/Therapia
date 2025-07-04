import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingpageHomeComponent } from './loadingpage-home.component';

describe('LoadingpageHomeComponent', () => {
  let component: LoadingpageHomeComponent;
  let fixture: ComponentFixture<LoadingpageHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingpageHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingpageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
