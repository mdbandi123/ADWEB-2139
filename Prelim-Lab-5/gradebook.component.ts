import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  //Img
  imgUrl = "assets/img/Seal_HAU.png";

  //style binding
  txtColor = "white";
  bgColor = "#9b3e34";
  fontWeight ="bold";
  cardPadding="5em";
  contentPadding="10px";

  //data bindings
  studName="";
  prelim=0;
  midterm=0
  final=0;

  studName_2="";
  prelim_2=0;
  midterm_2=0
  final_2=0;

  constructor() { }

  ngOnInit(): void {
  }

}
