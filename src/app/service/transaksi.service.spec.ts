import { TestBed } from '@angular/core/testing';

import { TransaksiService } from './transaksi.service';

describe('TransaksiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransaksiService = TestBed.get(TransaksiService);
    expect(service).toBeTruthy();
  });
});
