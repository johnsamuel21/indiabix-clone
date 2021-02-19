import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesPage2Component } from './ques-page2.component';

describe('QuesPage2Component', () => {
  let component: QuesPage2Component;
  let fixture: ComponentFixture<QuesPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuesPage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
