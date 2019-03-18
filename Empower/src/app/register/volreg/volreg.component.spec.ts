import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolregComponent } from './volreg.component';

describe('VolregComponent', () => {
  let component: VolregComponent;
  let fixture: ComponentFixture<VolregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
