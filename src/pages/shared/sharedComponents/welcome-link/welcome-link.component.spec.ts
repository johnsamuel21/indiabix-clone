import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeLinkComponent } from './welcome-link.component';

describe('WelcomeLinkComponent', () => {
  let component: WelcomeLinkComponent;
  let fixture: ComponentFixture<WelcomeLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
