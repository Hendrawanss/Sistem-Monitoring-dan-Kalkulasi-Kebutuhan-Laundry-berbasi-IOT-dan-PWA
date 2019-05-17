import { TestBed } from '@angular/core/testing';

import { KebutuhanService } from './kebutuhan.service';

describe('KebutuhanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KebutuhanService = TestBed.get(KebutuhanService);
    expect(service).toBeTruthy();
  });
});
