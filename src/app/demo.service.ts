import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DemoService {

  constructor( private http: HttpClient ) { }

  getServerData() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

}