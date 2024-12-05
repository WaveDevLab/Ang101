import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildServiceService {

  private calculationResult = new Subject<number>();
  calculationResult$ = this.calculationResult.asObservable();

  constructor() { }

  add(num1: number, num2: number){
    const result = num1 + num2;
    this.calculationResult.next(result);
  }

  subtract(num1: number, num2: number){
    const result = num1 - num2;
    this.calculationResult.next(result);
  }

  multiply(num1: number, num2: number){
    const result = num1 * num2;
    this.calculationResult.next(result);
  }

  divide(num1: number, num2: number){
    const result = num1 / num2;
    this.calculationResult.next(result);
  }
  
}
