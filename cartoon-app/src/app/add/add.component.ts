import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartoonService } from '../cartoon.service';
import { Cartoon } from '../model/cartoon.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cartoon : Cartoon;
  character : string []=[];
  value:string="";
  constructor( private service: CartoonService, private route: Router) {
    this.cartoon = new Cartoon();
   }

  ngOnInit(): void {
  }

  save()
  {
    this.service.add(this.cartoon);
    this.route.navigate(['list']);
  }

  addCharacter()
  {
    this.character.push(this.value);
    this.value="";
  }
}
