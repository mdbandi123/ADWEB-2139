import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emplist3',
  templateUrl: './emplist3.component.html',
  styleUrls: ['./emplist3.component.css']
})
export class Emplist3Component implements OnInit {

  employees: any[];

  constructor(private emparray: EmpServiceService) {
    this.employees = this.emparray.empArray
  }

  ngOnInit(): void {
  }

}
