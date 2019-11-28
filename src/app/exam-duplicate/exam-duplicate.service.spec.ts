import { TestBed } from '@angular/core/testing';

import { ExamDuplicateService } from './exam-duplicate.service';

describe('ExamDuplicateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamDuplicateService = TestBed.get(ExamDuplicateService);
    expect(service).toBeTruthy();
  });

  it('should remove duplicated item', () => {
    const service: ExamDuplicateService = TestBed.get(ExamDuplicateService);
    const expected: number[] = [1,22,11,100,0,59,5];
    const actual: number[] = service.removeDuplicates([1,22,11,100,0,59,11,5,0,22]);
    expect(expected).toEqual(actual)
  });

});

