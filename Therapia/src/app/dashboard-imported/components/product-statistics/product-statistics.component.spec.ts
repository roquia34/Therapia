import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStatisticsComponent } from './product-statistics.component';

describe('ProductStatisticsComponent', () => {
  let component: ProductStatisticsComponent;
  let fixture: ComponentFixture<ProductStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ProfileCardComponent } from './profile-card.component';

// describe('ProfileCardComponent', () => {
//   let component: ProfileCardComponent;
//   let fixture: ComponentFixture<ProfileCardComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ProfileCardComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ProfileCardComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
