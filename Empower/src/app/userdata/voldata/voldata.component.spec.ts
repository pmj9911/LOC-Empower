import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoldataComponent } from './voldata.component';

describe('VoldataComponent', () => {
  let component: VoldataComponent;
  let fixture: ComponentFixture<VoldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
