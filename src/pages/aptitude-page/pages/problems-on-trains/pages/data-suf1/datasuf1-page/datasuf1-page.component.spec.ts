import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datasuf1PageComponent } from './datasuf1-page.component';

describe('Datasuf1PageComponent', () => {
  let component: Datasuf1PageComponent;
  let fixture: ComponentFixture<Datasuf1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datasuf1PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Datasuf1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
