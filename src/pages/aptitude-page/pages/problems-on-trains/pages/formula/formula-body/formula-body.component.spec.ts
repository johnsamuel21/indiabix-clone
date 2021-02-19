import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaBodyComponent } from './formula-body.component';

describe('FormulaBodyComponent', () => {
  let component: FormulaBodyComponent;
  let fixture: ComponentFixture<FormulaBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
