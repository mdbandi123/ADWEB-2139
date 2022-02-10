import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  //Text Interpolation

  partnerHeader = "Below are our Corporate Partners";
  button = "View website";

  //style Binding
  fontWeight1 = "bold";
  cardImgY = "100px";
  cardImgX = "100px";

  partners:any[]=[
    {company:"Microsoft",trademark:"assets/img/ms-logo.png",sponsorship:"Platinum", site:"https://www.microsoft.com/en-ph"},
    {company:"Apple, Inc.",trademark:"assets/img/apple-logo.png",sponsorship:"Gold", site:"https://www.apple.com/"},
    {company:"Amazon",trademark:"assets/img/amazon-logo.png",sponsorship:"Silver", site:"https://www.amazon.com/"},
    {company:"Google, Inc.",trademark:"assets/img/google-logo.png",sponsorship:"Bronze", site:"https://www.google.com/"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
