import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbalFrameComponent } from './verbal-frame.component';

describe('VerbalFrameComponent', () => {
  let component: VerbalFrameComponent;
  let fixture: ComponentFixture<VerbalFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbalFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbalFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
