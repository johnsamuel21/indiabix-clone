import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainProblemPageComponent } from './train-problem-page.component';

describe('TrainProblemPageComponent', () => {
  let component: TrainProblemPageComponent;
  let fixture: ComponentFixture<TrainProblemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainProblemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainProblemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
