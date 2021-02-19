import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaPageComponent } from './formula-page.component';

describe('FormulaPageComponent', () => {
  let component: FormulaPageComponent;
  let fixture: ComponentFixture<FormulaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
