import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryTeamComponent } from './recovery-team.component';

describe('RecoveryTeamComponent', () => {
  let component: RecoveryTeamComponent;
  let fixture: ComponentFixture<RecoveryTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecoveryTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoveryTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
