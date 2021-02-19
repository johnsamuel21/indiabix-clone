import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudeBodyComponent } from './aptitude-body.component';

describe('AptitudeBodyComponent', () => {
  let component: AptitudeBodyComponent;
  let fixture: ComponentFixture<AptitudeBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptitudeBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AptitudeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
