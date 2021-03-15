import { Component, OnInit } from '@angular/core';
import { user } from '../models/user';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  constructor() { }
list:Array<any> = [];
  ngOnInit(): void {
    this.getlist();
  }
 getlist() {
  this.list = ['Jhon', 'Grape', 'Mike' ,'Josaph', 'Lily']
 }
}
