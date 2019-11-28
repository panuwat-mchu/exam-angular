import { TestBed } from '@angular/core/testing';

import { ExamReverseService } from './exam-reverse.service';

describe('ExamReverseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamReverseService = TestBed.get(ExamReverseService);
    expect(service).toBeTruthy();
  });

  it('"hello" should return "olleh"', () => {
    const service: ExamReverseService = TestBed.get(ExamReverseService);
    const expected: string = 'olleh';
    const actual: string = service.reverse('hello'); 
    expect(expected).toEqual(actual);
  });

});
