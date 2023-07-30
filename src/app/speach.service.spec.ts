import { TestBed } from '@angular/core/testing';

import { SpeachService } from './speach.service';

describe('SpeachService', () => {
  let service: SpeachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
