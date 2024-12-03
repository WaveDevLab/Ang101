import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-web-service';

  firstName: string = '';
  lastName: string = '';
  nickName:string = '';
  age:string = '';
  birthDay:string = '';

  buttonClass:string = '';

  Check() {
    if (
      this.firstName === '' ||
      this.lastName === '' ||
      this.nickName === '' ||
      this.age === '' ||
      this.birthDay === ''
    ) {
      this.buttonClass = 'btn btn-danger';
    } else {
      this.buttonClass = 'btn btn-primary';
    }
  }
}
