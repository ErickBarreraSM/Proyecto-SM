import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, map, pipe, throwError } from 'rxjs'
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root',
})
export class CombosService {
  private apiUrl = 'http://192.168.111.13:3001/api/v1/products/21';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}