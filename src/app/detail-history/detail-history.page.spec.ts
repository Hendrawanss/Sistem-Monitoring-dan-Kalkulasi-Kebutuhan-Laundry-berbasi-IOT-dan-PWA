import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHistoryPage } from './detail-history.page';

describe('DetailHistoryPage', () => {
  let component: DetailHistoryPage;
  let fixture: ComponentFixture<DetailHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailHistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
