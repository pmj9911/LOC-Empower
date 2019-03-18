import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersDataComponent } from './members-data.component';

describe('MembersDataComponent', () => {
  let component: MembersDataComponent;
  let fixture: ComponentFixture<MembersDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
