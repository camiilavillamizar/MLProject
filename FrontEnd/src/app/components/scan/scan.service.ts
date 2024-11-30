import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  
  //Backend Endpoint
  private apiUrl = 'http://localhost:5000/api/endpoint'; 

  constructor(private http: HttpClient) {}

  //To call backend endpoint
  getDisease(data: any): Observable<String> {
    return this.http.post<String>(this.apiUrl, data); 
  }
}
