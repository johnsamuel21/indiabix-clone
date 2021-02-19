import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaContentComponent } from './formula-content.component';

describe('FormulaContentComponent', () => {
  let component: FormulaContentComponent;
  let fixture: ComponentFixture<FormulaContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
