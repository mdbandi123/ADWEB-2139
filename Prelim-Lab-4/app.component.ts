import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prelim-Lab-4';

  //String Interpolation
  interString: string = "Michael Dave Sumang (WD-302)";

  //Style Binding
  myColor = "purple";

  //Property Binding
  clientName: string = "MD Sumang";

  //Class Binding
  noColor:boolean = false;
  yesColor:boolean = true;
  appliedCSSClass = "green";

  //Event Binding
  showData($event:any)
  {
    if($event)
    {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  getData(data:any)
  {
    console.warn(data);
  }

}
