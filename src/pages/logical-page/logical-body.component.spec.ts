import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicalBodyComponent } from './logical-body.component';

describe('LogicalBodyComponent', () => {
  let component: LogicalBodyComponent;
  let fixture: ComponentFixture<LogicalBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicalBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
