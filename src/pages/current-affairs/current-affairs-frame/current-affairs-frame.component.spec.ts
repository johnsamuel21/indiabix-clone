import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAffairsFrameComponent } from './current-affairs-frame.component';

describe('CurrentAffairsFrameComponent', () => {
  let component: CurrentAffairsFrameComponent;
  let fixture: ComponentFixture<CurrentAffairsFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentAffairsFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAffairsFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
