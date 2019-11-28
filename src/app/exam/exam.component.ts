import { Component, OnInit } from '@angular/core';
import { ExamSortService } from '../exam-sort/exam-sort.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  results: {input:any, expected:any, actual:any}[] = [];

  constructor(
    private examSortService: ExamSortService
  ) { }

  ngOnInit() {
  }

}
