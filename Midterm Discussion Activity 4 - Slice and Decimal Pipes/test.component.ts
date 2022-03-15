import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],


})
export class TestComponent implements OnInit {

  //Variables

  //Required 1
  presentDate = new Date();


  //Required 2
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  //Required 3
  price: number = 2000.90;

  //Required 4
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

  //Required 5
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  lcase = "TO BE CONVERTED TO LOWERCASE";



  constructor() { }

  ngOnInit(): void {

  }

}
