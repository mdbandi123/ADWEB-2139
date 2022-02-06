import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  //ngIfElse
  isLogIn: boolean = true;
  isLogOut: boolean = false;

  //ngFor
  list = [1,2,3,4,5];

  studentArr: any[] = 
  [
    {"id": 1, "name": "student1"},
    {"id": 2, "name": "student2"},
    {"id": 3, "name": "student3"},
    {"id": 4, "name": "student4"},
  ];
  trackByData(index:number, studentArr:any):number
  {
    return studentArr.id;
  }

  staff = 
  [
    {firstName: "Joseph", lastName: "Diaz", email: "joseph.diaz@test.com", role: "User"},
    {firstName: "James", lastName: "Reynolds", email: "james.reynolds@test.com", role: "Admin"},
    {firstName: "Djoan", lastName: "Jaworski", email: "djoan.jaworski@test.com", role: "Admin"},
    {firstName: "Maria", lastName: "Garcia", email: "maria.garcia@test.com", role: "User"},
    {firstName: "Jay", lastName: "Bernardo", email: "jay.bernardo@test.com", role: "User"},

  ]

  //ngSwitch
  logInName = "admin";
  logInName2 = "user";



  constructor() { }

  ngOnInit(): void {
  }

}
