import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChildServiceService } from './child-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calculator-child',
  templateUrl: './calculator-child.component.html',
  styleUrls: ['./calculator-child.component.css']
})
export class CalculatorChildComponent {
  @Input() num1: number = 0;
  @Input() num2: number = 0;
  @Input() operation: string = '';

  result: number = 0;

  @Output() resultEvent = new EventEmitter<number>();

  private subscription: Subscription = new Subscription();

  constructor(
    private childService: ChildServiceService
  ) { }

  calculateResult() {
    console.log('calculateResult')
    switch (this.operation) {
      case 'add': this.childService.add(this.num1, this.num2); break;
      case 'subtract': this.childService.subtract(this.num1, this.num2); break;
      case 'multiply': this.childService.multiply(this.num1, this.num2); break;
      case 'divide': this.childService.divide(this.num1, this.num2); break;
    }
  }

  saving = false;

  ngOnInit(): void {
    if (!this.saving) {
      this.saving = true;
      this.subscription = this.childService.calculationResult$
        .subscribe(result => {
          this.result = result;
          this.resultEvent.emit(this.result);

          this.saving = false;
        });
    }

  }

  sendResult() {

  }
}
