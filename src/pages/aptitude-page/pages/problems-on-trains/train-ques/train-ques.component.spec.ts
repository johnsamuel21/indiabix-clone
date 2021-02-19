import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainQuesComponent } from './train-ques.component';

describe('TrainQuesComponent', () => {
  let component: TrainQuesComponent;
  let fixture: ComponentFixture<TrainQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainQuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
