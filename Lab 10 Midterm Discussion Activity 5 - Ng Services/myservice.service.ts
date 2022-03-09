import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  showTodayDate() {
    let mdate = new Date();
    return mdate;
  }
  serviceproperty = "Service Created";
}
