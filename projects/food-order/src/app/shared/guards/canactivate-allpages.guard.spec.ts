import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canactivateAllpagesGuard } from './canactivate-allpages.guard';

describe('canactivateAllpagesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canactivateAllpagesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
