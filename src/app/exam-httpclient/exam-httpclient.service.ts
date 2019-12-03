import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamHttpclientService {

  constructor(
    private http: HttpClient
  ) { }

  dataUrl = 'assets/data.json';
  
  getMessage() {
    return this.http.get(this.dataUrl);
  }

}
