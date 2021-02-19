import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringFrameComponent } from './engineering-frame.component';

describe('EngineeringFrameComponent', () => {
  let component: EngineeringFrameComponent;
  let fixture: ComponentFixture<EngineeringFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeringFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
