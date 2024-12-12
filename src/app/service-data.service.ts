import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  // Method to get data from API
  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}