import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  //Event Binding
  firstName = "";
  lastName = "";
  email = "";
  insti = "";
  

   //Style Binding
   fontWeight1 = "bold";

  constructor() { }

  ngOnInit(): void {
  }

}
