import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamAvatarComponent } from './exam-avatar.component';

describe('ExamAvatarComponent', () => {
  let component: ExamAvatarComponent;
  let fixture: ComponentFixture<ExamAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
