import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor (private http: HttpClient) {}
  
  getAll() {
    return this.http.get('/gridOptions');
  }
}
