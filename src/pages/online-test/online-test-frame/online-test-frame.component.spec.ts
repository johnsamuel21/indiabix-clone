import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTestFrameComponent } from './online-test-frame.component';

describe('OnlineTestFrameComponent', () => {
  let component: OnlineTestFrameComponent;
  let fixture: ComponentFixture<OnlineTestFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineTestFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineTestFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
