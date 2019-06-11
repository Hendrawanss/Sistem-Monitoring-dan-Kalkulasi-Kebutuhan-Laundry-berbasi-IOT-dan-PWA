import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengadaanPage } from './pengadaan.page';

describe('PengadaanPage', () => {
  let component: PengadaanPage;
  let fixture: ComponentFixture<PengadaanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengadaanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengadaanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
