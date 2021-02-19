import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeFinalTextComponent } from './welcome-final-text.component';

describe('WelcomeFinalTextComponent', () => {
  let component: WelcomeFinalTextComponent;
  let fixture: ComponentFixture<WelcomeFinalTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeFinalTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeFinalTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
