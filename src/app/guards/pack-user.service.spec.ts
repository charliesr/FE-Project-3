import { TestBed, inject } from '@angular/core/testing';

import { PackUserService } from './pack-user.service';

describe('PackUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackUserService]
    });
  });

  it('should be created', inject([PackUserService], (service: PackUserService) => {
    expect(service).toBeTruthy();
  }));
});
