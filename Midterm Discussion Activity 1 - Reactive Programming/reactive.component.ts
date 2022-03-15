import { Component, OnInit } from '@angular/core';
import { filter, from, fromEvent, interval, map, Observable, of, range } from 'rxjs';
import { ajax } from 'rxjs/ajax';

//RxJs 
/*
import { Observable, of, range, from, fromEvent, filter } from 'rxjs';
import { map, catchError } from 'rxjs/operators'; 
*/

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  //Variables

  numbers: number[] = [];
  sum: number = 0;


  constructor() { }

  //Using filter
  filteredNumbers: number[] = [];
  filtered: number = 0;

  //using map
  mappedNumbers: number[] = [];
  mapped: number = 0;

  //using ajax
  apiMessage: any;

  //using fromEvent
  counter: number = 0;


  ngOnInit(): void {
    //const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    //const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const numbers$ = range(1, 10);

    //observer

    const observer = {
      next: (num: number) => { this.numbers.push(num); this.sum += num },
      error: (err: any) => console.log(err),
      complete: () => console.log("Observation completed!")

    };

    //subscribing
    numbers$.subscribe(observer);

    //Using the filter operation
    const filterFn = filter((num: number) => num > 5);
    const filteredNumber$ = filterFn(numbers$);
    filteredNumber$.subscribe((num: number) => {
      this.filteredNumbers.push(num); this.filtered += num
    });

    //using the map operation
    const mapFn = map((num: number) => num + num);
    const mapppedNumbers$ = numbers$.pipe(filterFn, mapFn);
    mapppedNumbers$.subscribe((num: number) => {
      this.mappedNumbers.push(num); this.mapped += num
    });

    //using ajax
    const api$ = ajax({
      url: "https://httpbin.org/delay/1",
      method: "POST",
      headers: { "Content-Type": "application/text" },
      body: "Michael Dave Sumang"
    });
    //ajax subscription
    api$.subscribe(res => this.apiMessage = res.request.body);

    //using fromEvent
    const clickEvent$ = fromEvent(document, "click");
    clickEvent$.subscribe(() => this.counter++)

    //REQUIRED 1

    /*
    const interval$ = interval(1000);
    interval$.subscribe(val => console.log('stream 1' + val));
    const click$ = fromEvent(document, 'click');
    click$.subscribe(evt => console.log('Mouse Clicked' + evt));
    const counter$ = range(1, 15);
    counter$.subscribe(i => console.log('ADDITIONAL OBSERVABLE ' + i));
    */

    //REQUIRED 2
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next(x) { console.log('got value ' + x); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');

  };



}
