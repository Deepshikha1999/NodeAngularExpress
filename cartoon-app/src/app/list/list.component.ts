import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs';
import { CartoonService } from '../cartoon.service';
import { Cartoon } from '../model/cartoon.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cartoons : Cartoon[]=[];
  x:number[]=[];
  constructor(private service : CartoonService) { }

  ngOnInit(): void {
    this.service.http.get<Cartoon[]>('assets/cartoon.json').pipe(retry(1)).subscribe(data=> this.cartoons=data);
  }
  change(i:number)
  {
    if(this.x[i]==0)
    this.x[i]=1;
    else
    this.x[i]=0;
  }

}
