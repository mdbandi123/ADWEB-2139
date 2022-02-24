import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  faceShield = "assets/img/face-shield.png";
  handbag = "assets/img/handbag.png";
  joggingPants = "assets/img/jogging pants.png";
  mug = "assets/img/mug.png";
  shoes = "assets/img/shoes.png";
  tshirt = "assets/img/tshirt.png";

  constructor() { }

  ngOnInit(): void {
  }

}
