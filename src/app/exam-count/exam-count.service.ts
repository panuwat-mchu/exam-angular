import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamCountService {

  constructor() { }

  countOccurrencesOf(input: string, char: string): number {
    throw new Error("Method not implemented.");
  }

}
