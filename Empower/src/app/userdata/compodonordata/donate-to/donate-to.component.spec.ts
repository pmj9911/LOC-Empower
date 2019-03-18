import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateToComponent } from './donate-to.component';

describe('DonateToComponent', () => {
  let component: DonateToComponent;
  let fixture: ComponentFixture<DonateToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
