import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompovoldataComponent } from './compovoldata.component';

describe('CompovoldataComponent', () => {
  let component: CompovoldataComponent;
  let fixture: ComponentFixture<CompovoldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompovoldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompovoldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
