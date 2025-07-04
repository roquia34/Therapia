import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsThankYouComponent } from './contact-us-thank-you.component';

describe('ContactUsThankYouComponent', () => {
  let component: ContactUsThankYouComponent;
  let fixture: ComponentFixture<ContactUsThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactUsThankYouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
