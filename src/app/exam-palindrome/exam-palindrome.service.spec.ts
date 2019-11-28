import { TestBed } from '@angular/core/testing';

import { ExamPalindromeService } from './exam-palindrome.service';
import { iif } from 'rxjs';

describe('ExamPalindromeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    expect(service).toBeTruthy();
  });

  it('1 should return true', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(1);
    expect(true).toEqual(actual);
  });

  it('20 should return false', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(20);
    expect(false).toEqual(actual);
  });

  it('22 should return true', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(22);
    expect(true).toEqual(actual);
  });

  it('0 should return true', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(0);
    expect(true).toEqual(actual);
  });

  it('101 should return true', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(101);
    expect(true).toEqual(actual);
  });

  it('102 should return false', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(102);
    expect(false).toEqual(actual);
  });

  it('1221 should return true', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(1221);
    expect(true).toEqual(actual);
  });

  it('13321 should return false', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(13321);
    expect(false).toEqual(actual);
  });

  it('13331 should return true', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(13331);
    expect(true).toEqual(actual);
  });

  it('11 should return true', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(11);
    expect(true).toEqual(actual);
  });


});
