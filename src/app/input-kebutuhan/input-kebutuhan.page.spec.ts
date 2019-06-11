import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputKebutuhanPage } from './input-kebutuhan.page';

describe('InputKebutuhanPage', () => {
  let component: InputKebutuhanPage;
  let fixture: ComponentFixture<InputKebutuhanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputKebutuhanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputKebutuhanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
