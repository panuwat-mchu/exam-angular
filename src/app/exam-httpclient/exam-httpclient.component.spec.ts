import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamHttpclientComponent } from './exam-httpclient.component';

describe('ExamHttpclientComponent', () => {
  let component: ExamHttpclientComponent;
  let fixture: ComponentFixture<ExamHttpclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamHttpclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamHttpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
