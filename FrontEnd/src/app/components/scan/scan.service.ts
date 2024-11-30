import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackResponse } from '../scan/response.interface'

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  
  //Backend Endpoint
  private apiUrl = 'http://localhost:5000/predict'; 

  constructor(private http: HttpClient) {}

  //To call backend endpoint
  getDisease(file: File): Observable<BackResponse> {
    const formData = new FormData();
    formData.append('file', file); 
  
    return this.http.post<BackResponse>(this.apiUrl, formData); 
  }
}
