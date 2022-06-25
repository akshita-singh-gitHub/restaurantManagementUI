import { TestBed } from '@angular/core/testing';

import { RestoTrialService } from './resto-trial.service';

describe('RestoTrialService', () => {
  let service: RestoTrialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestoTrialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
