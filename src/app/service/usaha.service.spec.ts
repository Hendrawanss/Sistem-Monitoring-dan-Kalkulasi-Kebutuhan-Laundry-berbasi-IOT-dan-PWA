import { TestBed } from '@angular/core/testing';

import { UsahaService } from './usaha.service';

describe('UsahaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsahaService = TestBed.get(UsahaService);
    expect(service).toBeTruthy();
  });
});
