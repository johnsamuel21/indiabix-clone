import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicalFrameComponent } from './logical-frame.component';

describe('LogicalFrameComponent', () => {
  let component: LogicalFrameComponent;
  let fixture: ComponentFixture<LogicalFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicalFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicalFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
