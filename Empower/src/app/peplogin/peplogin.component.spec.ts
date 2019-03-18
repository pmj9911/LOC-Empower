import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeploginComponent } from './peplogin.component';

describe('PeploginComponent', () => {
  let component: PeploginComponent;
  let fixture: ComponentFixture<PeploginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeploginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
