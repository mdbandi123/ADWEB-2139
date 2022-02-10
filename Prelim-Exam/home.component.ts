import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Text Interpollation
  lineOne = "Research Conferences";
  lineTwo = "Join our online events this 2021!";
  lineButton = "Early Bird Registration";

  cardHeader = "Join our Research Conferences around the Globe!";
  button = "Learn more";


  //Style Binding
  fontWeight1 = "bold";
  cardImgY = "161px";

  //Image Binding
  france = "assets/img/france-card.jpg";
  seoul = "assets/img/seoul-card.jpg";
  sf = "assets/img/sf-card.jpg";
  boston = "assets/img/boston-card.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
