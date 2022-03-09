import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  todaydate: any;
  newcomponentproperty: any;
  newcomponent = "Entered in newcomponeent";
  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.todaydate = this.myservice.showTodayDate();
    this.newcomponentproperty = this.myservice.serviceproperty;
  }

}
