import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainBodyComponent } from './train-body.component';

describe('TrainBodyComponent', () => {
  let component: TrainBodyComponent;
  let fixture: ComponentFixture<TrainBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
