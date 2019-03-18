import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberregComponent } from './memberreg.component';

describe('MemberregComponent', () => {
  let component: MemberregComponent;
  let fixture: ComponentFixture<MemberregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
