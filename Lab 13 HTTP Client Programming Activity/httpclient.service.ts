import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http: HttpClient) { }

  getUserfromServer() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getLimitUsersfromServer() {
    return this.http.get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5");
  }
}
