import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewFrameComponent } from './interview-frame.component';

describe('InterviewFrameComponent', () => {
  let component: InterviewFrameComponent;
  let fixture: ComponentFixture<InterviewFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
