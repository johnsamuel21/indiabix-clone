import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datasuf2PageComponent } from './datasuf2-page.component';

describe('Datasuf2PageComponent', () => {
  let component: Datasuf2PageComponent;
  let fixture: ComponentFixture<Datasuf2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datasuf2PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Datasuf2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
