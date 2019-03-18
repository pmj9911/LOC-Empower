import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemdataComponent } from './memdata.component';

describe('MemdataComponent', () => {
  let component: MemdataComponent;
  let fixture: ComponentFixture<MemdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
