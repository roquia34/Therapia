import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffesionalsBookComponent } from './proffesionals-book.component';

describe('ProffesionalsBookComponent', () => {
  let component: ProffesionalsBookComponent;
  let fixture: ComponentFixture<ProffesionalsBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProffesionalsBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProffesionalsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
