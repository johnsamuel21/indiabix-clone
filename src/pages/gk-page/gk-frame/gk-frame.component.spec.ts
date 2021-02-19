import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GkFrameComponent } from './gk-frame.component';

describe('GkFrameComponent', () => {
  let component: GkFrameComponent;
  let fixture: ComponentFixture<GkFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GkFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GkFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
