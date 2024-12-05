import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator-body',
  templateUrl: './calculator-body.component.html',
  styleUrls: ['./calculator-body.component.css']
})
export class CalculatorBodyComponent implements OnInit {
    result: number = 0;
    invalidForm: boolean = false;

    calculatorForm: FormGroup;

    constructor() {
      this.calculatorForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        input1: new FormControl(0),
        input2: new FormControl(0),
        operation: new FormControl('add')
      });
    }

    ngOnInit(): void {
      console.log('CalculatorBodyComponent initialized');
      const defaultCalculatorForm = {
        name: 'John Doe',
        input1: 100,
        input2: 200,
        operator: 'add'
      }

      this.calculatorForm.patchValue(defaultCalculatorForm)
    }

   setResultValue(value: number){
    this.invalidForm = this.calculatorForm.invalid;
    if(!this.invalidForm){
      this.result = value;
    }
   }
}