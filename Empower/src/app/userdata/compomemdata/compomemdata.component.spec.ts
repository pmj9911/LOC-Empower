import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompomemdataComponent } from './compomemdata.component';

describe('CompomemdataComponent', () => {
  let component: CompomemdataComponent;
  let fixture: ComponentFixture<CompomemdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompomemdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompomemdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
