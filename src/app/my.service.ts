import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  /*
  private studentDataSubject:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  studentData$ = this.studentDataSubject.asObservable();

  updateStudentData(data: any) {
    this.studentDataSubject.next(data);
  }
  */
  
  tasks: any[]= [
    { departmentId: 1, studentId: 1, name: 'ece1', age: 20, fatherName: 'ece1 father', mobile: '1234567890', address: '123 Main St, City' },
    { departmentId: 1, studentId: 2, name: 'ece2', age: 25, fatherName: 'ece2 father', mobile: '9876543210', address: '456 Elm St, Town' },
    { departmentId: 2, studentId: 1, name: 'cse1', age: 20, fatherName: 'cse1 father', mobile: '4567891230', address: '789 Oak Ave, Village' },
    { departmentId: 2, studentId: 2, name: 'cse2', age: 25, fatherName: 'cse2 father', mobile: '7890123456', address: '567 Pine Rd, County' },
    { departmentId: 3, studentId: 1, name: 'eee1', age: 20, fatherName: 'eee1 father', mobile: '5678901234', address: '890 Maple Ln, State' },
    { departmentId: 3, studentId: 2, name: 'eee2', age: 25, fatherName: 'eee2 father', mobile: '2345678901', address: '234 Cherry Blvd, Country' },
    // Add more data entries here
  ];
  dtasks!: any[];
  id!: number;
  /*
  constructor() {
    this.tasks=this.getTodoListFromLocalStorage();
  }
  getTodoListFromLocalStorage() {
      let stringifiedTodoList = localStorage.getItem("tasks");
      if (stringifiedTodoList === null) {
          return [];
      }
      let parsedTodoList = JSON.parse(stringifiedTodoList);
      return parsedTodoList;
  }
  */
}
