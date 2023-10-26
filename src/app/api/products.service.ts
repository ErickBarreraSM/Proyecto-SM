import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, pipe } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(private _http: HttpClient) {}

 /* addEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/employees', data);
  }*/

  /*  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/employees/${id}`, data);
  }*/

  getProduct(): Observable<any> {
    return this._http.get('http://localhost:3000/post');
  }

  getImg(): Observable<any> {
    return this._http.get('http://localhost:3000/post');
  }

 /*  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }*/
}

