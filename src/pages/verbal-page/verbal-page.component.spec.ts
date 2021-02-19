import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbalPageComponent } from './verbal-page.component';

describe('VerbalPageComponent', () => {
  let component: VerbalPageComponent;
  let fixture: ComponentFixture<VerbalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
