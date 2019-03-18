import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompodonordataComponent } from './compodonordata.component';

describe('CompodonordataComponent', () => {
  let component: CompodonordataComponent;
  let fixture: ComponentFixture<CompodonordataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompodonordataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompodonordataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
