import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorregComponent } from './donorreg.component';

describe('DonorregComponent', () => {
  let component: DonorregComponent;
  let fixture: ComponentFixture<DonorregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
