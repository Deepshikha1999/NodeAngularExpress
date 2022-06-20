import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Cartoon } from './model/cartoon.model';

@Injectable({
  providedIn: 'root'
})
export class CartoonService {

  constructor(public http: HttpClient) { }

  add(cartoon:Cartoon)
  {
    this.http.post('assets/cartoon.json',cartoon).subscribe(data => data = cartoon);  
  }
}
