import { Component, OnInit } from '@angular/core';
import { ExamHttpclientService } from './exam-httpclient.service';

@Component({
  selector: 'app-exam-httpclient',
  templateUrl: './exam-httpclient.component.html',
  styleUrls: ['./exam-httpclient.component.scss']
})
export class ExamHttpclientComponent implements OnInit {

  message: any = "Hello";

  constructor(
    private service: ExamHttpclientService
  ) { }

  ngOnInit() {
    this.message = this.service.getMessage();
  }

}


