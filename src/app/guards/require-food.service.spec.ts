import { TestBed, inject } from '@angular/core/testing';

import { RequireFoodService } from './require-food.service';

describe('RequireFoodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireFoodService]
    });
  });

  it('should be created', inject([RequireFoodService], (service: RequireFoodService) => {
    expect(service).toBeTruthy();
  }));
});
