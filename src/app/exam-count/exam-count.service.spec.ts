import { TestBed } from '@angular/core/testing';

import { ExamCountService } from './exam-count.service';

describe('ExamCountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamCountService = TestBed.get(ExamCountService);
    expect(service).toBeTruthy();
  });

  it('shoul have 3 letters', () => {
    const service: ExamCountService = TestBed.get(ExamCountService);
    const expected: number = 3;
    const actual: number = service.countOccurrencesOf('hello world','l');
    expect(expected).toEqual(actual);
  });

  it('should have 8 letters', () => {
    const service: ExamCountService = TestBed.get(ExamCountService);
    const expected: number = 8;
    const actual: number = service.countOccurrencesOf('To make it in this business, you either have to be first, best, or different. - Loretta Lynn -','t');
    expect(expected).toEqual(actual);
  });

});
