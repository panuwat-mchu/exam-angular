import { TestBed } from '@angular/core/testing';

import { ExamSortService } from './exam-sort.service';

describe('ExamSortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamSortService = TestBed.get(ExamSortService);
    expect(service).toBeTruthy();
  });

  it('should be return a sorted array', () => {
    const service: ExamSortService = TestBed.get(ExamSortService);
    const expected: number[] = [12, 19, 20, 45, 55, 91];
    const actual: number[] = service.sort([20, 12, 45, 19, 91, 55]);
    expect(expected).toEqual(actual);
  });

});
