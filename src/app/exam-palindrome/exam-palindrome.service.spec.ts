import { TestBed } from '@angular/core/testing';

import { ExamPalindromeService } from './exam-palindrome.service';
import { iif } from 'rxjs';

describe('ExamPalindromeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    expect(service).toBeTruthy();
  });

  it('should 1 be palindrome', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(1);
    expect(true).toEqual(actual);
  });

  it('should 20 be palindrome', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(20);
    expect(false).toEqual(actual);
  });

  it('should 22 be palindrome', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(22);
    expect(true).toEqual(actual);
  });

  it('should 0 be palindrome', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(0);
    expect(true).toEqual(actual);
  });

  it('should 101 be palindrome', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(101);
    expect(true).toEqual(actual);
  });

  it('should 102 be palindrome', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(102);
    expect(false).toEqual(actual);
  });

  it('should 1221 be palindrome', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(1221);
    expect(true).toEqual(actual);
  });

  it('should 13321 be palindrome', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(13321);
    expect(false).toEqual(actual);
  });

  it('should 13331 be palindrome', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(13331);
    expect(true).toEqual(actual);
  });

  it('should 11 be palindrome', () => {
    const service: ExamPalindromeService = TestBed.get(ExamPalindromeService);
    const actual:boolean = service.isPalindrome(11);
    expect(true).toEqual(actual);
  });


});
