import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiExternalService {

  constructor(private http: HttpClient) { }

  getMenuData() {
    const apiUrl = 'https://api.chucknorris.io/jokes/random';
    return this.http.get(apiUrl);
  }
}
