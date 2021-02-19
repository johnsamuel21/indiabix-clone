import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudeFrameComponent } from './aptitude-frame.component';

describe('AptitudeFrameComponent', () => {
  let component: AptitudeFrameComponent;
  let fixture: ComponentFixture<AptitudeFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptitudeFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AptitudeFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
