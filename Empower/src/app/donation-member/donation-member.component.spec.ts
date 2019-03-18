import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationMemberComponent } from './donation-member.component';

describe('DonationMemberComponent', () => {
  let component: DonationMemberComponent;
  let fixture: ComponentFixture<DonationMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
