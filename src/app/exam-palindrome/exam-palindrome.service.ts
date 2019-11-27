import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamPalindromeService {

  constructor() { }

  isPalindrome(arg0: number): boolean {
    return true;
    throw new Error("Method not implemented.");
  }

}
