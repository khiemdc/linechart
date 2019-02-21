import { TestBed } from '@angular/core/testing';

import { LinechartService } from './linechart.service';

describe('LinechartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinechartService = TestBed.get(LinechartService);
    expect(service).toBeTruthy();
  });
});
