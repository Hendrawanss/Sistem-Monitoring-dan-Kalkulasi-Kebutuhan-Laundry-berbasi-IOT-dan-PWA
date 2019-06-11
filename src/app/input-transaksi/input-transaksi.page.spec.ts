import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTransaksiPage } from './input-transaksi.page';

describe('InputTransaksiPage', () => {
  let component: InputTransaksiPage;
  let fixture: ComponentFixture<InputTransaksiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTransaksiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTransaksiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
