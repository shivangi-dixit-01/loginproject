import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../models/user';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'password'];

  dataSource = new MatTableDataSource([]);
  mydata: User[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.getlist();
  }

  getlist() {
    this.mydata = [
      { id:1, username: 'Jhon', firstName: 'Jhon', lastName: 'reed', password: 'H', token:'123' },
      { id:2, username: 'David', firstName: 'David', lastName: 'reed', password: 'H', token:'123' },
      { id:3, username: 'Lily', firstName: 'Lily', lastName: 'reed', password: 'H',  token:'123' },
      { id:4, username: 'Sam', firstName: 'Sam', lastName: 'reed', password: 'H',  token:'123' },
      { id:5, username: 'Canva', firstName: 'Canva', lastName: 'reed', password: 'H',  token:'123' },
      { id:6, username: 'Ruby', firstName: 'Ruby', lastName: 'reed', password: 'H',  token:'123' },
      { id:7, username: 'Jay', firstName: 'jay', lastName: 'reed', password: 'H',  token:'123' },
      { id:8, username: 'Michile', firstName: 'Michile', lastName: 'reed', password: 'H',  token:'123' },
    ];
      this.dataSource = new MatTableDataSource(this.mydata);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
  
  }
}