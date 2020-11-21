import { TestBed } from '@angular/core/testing';

import { CanactGuard } from './canact.guard';

describe('CanactGuard', () => {
  let guard: CanactGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanactGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
