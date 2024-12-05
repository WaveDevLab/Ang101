import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-web-service';

  f_NameLabel = 'Firstname: ';
  l_NameLabel = 'Lastname: ';
  n_NameLabel = 'Nickname: ';
  ageLabel = 'Age: ';
  birthdateLabel = 'Birthdate: ';

  firstName: string = 'Burinchai';
  lastName: string = 'Sukon';
  nickname: string = 'Wave'
  age: number | string = 21;
  birthdate: Date = new Date("2002-02-13");


  result: string[] = [];
  // inputType: any = {
  //   text: 'text',
  //   number: 'number',
  // }

  // imageUrl: string = `https://static.displate.com/270x380/displate/2023-12-12/7c97fb747ba4636b3d15a6de72a050a4_2e8c6296bafaaf43f8286599d5e9faec.jpg`;

  // showAlert():void {
  //   alert('Hi');
  // }

  // consoleFn():void {
  //   console.log(this.firstName)
  // }



  // car: CarSeat = {
  //   seat1: 'A',
  //   seat2: 'B',
  //   // seat3: 'C',
  //   // seat4: 'D',
  // }

  // car2: any = {};
  // cars: [] = [];

  // numberA: number = 10;
  // numberB: number = 20;

  // sum(numb1: number, numb2: number): number {
  //   return numb1 + numb2;
  // }
  
  

  ngOnInit(): void {
  //   const result: number = this.sum(this.numberA, this.numberB);
  //   console.log('result = ', result);

  //   const array: number[] = [1,2,3,4,5,6,7,8,9,10];

  //   for(let i = 0; i < array.length; i++){
  //     const _array:number = array[i];
  //     console.log('_array = ', _array);
  //   }

  //   const forEachData = array.forEach((x, i) => {
  //     if(x % 2 == 0){

  //     }
  //   });
  //   console.log(forEachData);


  //   const mapData = array.map((value:number, index:number): number => {
  //     return value + 1;
  //   });
  //   console.log('mapData', mapData);


    interface Student {
      studentName: string,
      score: number
  }
  
  // const students: Student[] = [
  //     {
  //         studentName: 'Ken',
  //         score: 100
  //     },
  //     {
  //         studentName: 'Wave',
  //         score: 98
  //     },
  //     {
  //         studentName: 'Oong',
  //         score: 54.2
  //     },
  //     {
  //         studentName: 'Pond',
  //         score: 80
  //     },
      
  // ]

  const students: Student[] = [
    { studentName: 'John', score: 99 },
    { studentName: 'Jane', score: 95 },
    { studentName: 'Jim', score: 80 },
    { studentName: 'Jill', score: 50 },
    { studentName: 'Alice', score: 88 },
    { studentName: 'Bob', score: 72 },
    { studentName: 'Charlie', score: 65 },
    { studentName: 'Diana', score: 91 },
    { studentName: 'Eve', score: 84 },
    { studentName: 'Frank', score: 78 },
    { studentName: 'Grace', score: 93 },
    { studentName: 'Hank', score: 62 },
    { studentName: 'Ivy', score: 45 },
    { studentName: 'Jack', score: 55 },
    { studentName: 'Karen', score: 87 },
    { studentName: 'Leo', score: 97 },
    { studentName: 'Mia', score: 74 },
    { studentName: 'Nathan', score: 68 },
    { studentName: 'Olivia', score: 82 },
    { studentName: 'Paul', score: 59 },
  ];
  
  const result2: string[] = [];
  let grade: string;
  
  students.map((student: Student) => {
      if(student.score >= 99){
          grade = 'A';
      }else if(student.score >= 95){
          grade = 'B';
      }else if(student.score >= 80){
          grade = 'C';
      }else if(student.score >= 60){
          grade = 'D';
      }else{
          grade = 'E';
      }
      
      this.result.push(`${student.studentName} ${grade}`);
  })
  
  console.log('result: ',this.result)
  }


  // date: Date = new Date;
}

// interface CarSeat {
//   seat1: string,
//   seat2: string,
//   seat3?: string,
//   seat4?: string,
// }
