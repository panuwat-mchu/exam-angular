import { TestBed } from '@angular/core/testing';

import { ExamHttpclientService } from './exam-httpclient.service';

describe('ExamHttpclientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamHttpclientService = TestBed.get(ExamHttpclientService);
    expect(service).toBeTruthy();
  });
});
