import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorBodyComponent } from './calculator-body.component';

describe('CalculatorBodyComponent', () => {
  let component: CalculatorBodyComponent;
  let fixture: ComponentFixture<CalculatorBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorBodyComponent]
    });
    fixture = TestBed.createComponent(CalculatorBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
