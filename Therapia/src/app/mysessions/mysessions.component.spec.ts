import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysessionsComponent } from './mysessions.component';

describe('MysessionsComponent', () => {
  let component: MysessionsComponent;
  let fixture: ComponentFixture<MysessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MysessionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
