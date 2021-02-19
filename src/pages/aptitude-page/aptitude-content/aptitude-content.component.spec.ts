import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudeContentComponent } from './aptitude-content.component';

describe('AptitudeContentComponent', () => {
  let component: AptitudeContentComponent;
  let fixture: ComponentFixture<AptitudeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptitudeContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AptitudeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
