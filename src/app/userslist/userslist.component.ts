import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../Helper/authentication.service';
import { UserService } from '../Helper/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  displayedColumns: string[] = ['username', 'firstName', 'lastName'];

  dataSource = new MatTableDataSource([]);


  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
  }

  ngOnInit() {
      this.loadAllUsers();
  }

  ngOnDestroy() {
      this.currentUserSubscription.unsubscribe();
  }
  
  private loadAllUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.users = users;
          this.dataSource = new MatTableDataSource(this.users);
      });
  }
}
