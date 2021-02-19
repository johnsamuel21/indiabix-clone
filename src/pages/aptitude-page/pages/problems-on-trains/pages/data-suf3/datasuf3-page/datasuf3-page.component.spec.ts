import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datasuf3PageComponent } from './datasuf3-page.component';

describe('Datasuf3PageComponent', () => {
  let component: Datasuf3PageComponent;
  let fixture: ComponentFixture<Datasuf3PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datasuf3PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Datasuf3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
