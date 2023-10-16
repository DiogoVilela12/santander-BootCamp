import { TestBed } from '@angular/core/testing';

import { ValorantAPIService } from './valorant-api.service';

describe('ValorantAPIService', () => {
  let service: ValorantAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValorantAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
