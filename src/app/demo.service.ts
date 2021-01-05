import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DemoService {

  constructor( private http: HttpClient ) { }

  getServerData() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

   postDataonServer(eid, name, sal) {
    let data =
      '{"empid":"' + eid + '","ename":"' + name + '","salary":"' + sal + '"}';
    console.log(data);
    return this.http.post("https://jsonplaceholder.typicode.com/posts", data, {
      headers: new HttpHeaders({ "Content-type": "application/json" })
    });
  }


}