import { Home } from './../app/home/home';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiURL: string = 'https://restcountries.eu/rest/v2/all';
  constructor(private httpClient: HttpClient) { }

  getUsers():Observable<any>{    
    return this.httpClient.get<Home[]>(this.apiURL);
  }
}
