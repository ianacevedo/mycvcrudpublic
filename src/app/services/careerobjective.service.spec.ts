import { TestBed } from '@angular/core/testing';

import { CareerobjectiveService } from './careerobjective.service';

describe('CareerobjectiveService', () => {
  let service: CareerobjectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerobjectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
