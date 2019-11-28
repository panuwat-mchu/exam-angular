import { Injectable } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ExamSortService {

  constructor() { }

  sort(arg0: number[]): number[] {
    return arg0.sort();
    throw new Error("Method not implemented.");
  }

}
