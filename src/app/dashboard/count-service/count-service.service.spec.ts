import { TestBed } from '@angular/core/testing';

import { CountService } from './count-service.service';

describe('CountServiceService', () => {
  let service: CountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
