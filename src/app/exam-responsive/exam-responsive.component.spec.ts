import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamResponsiveComponent } from './exam-responsive.component';

describe('ExamResponsiveComponent', () => {
  let component: ExamResponsiveComponent;
  let fixture: ComponentFixture<ExamResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
