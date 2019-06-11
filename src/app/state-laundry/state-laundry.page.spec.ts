import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateLaundryPage } from './state-laundry.page';

describe('StateLaundryPage', () => {
  let component: StateLaundryPage;
  let fixture: ComponentFixture<StateLaundryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateLaundryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateLaundryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
