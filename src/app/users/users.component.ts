import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  getUsers(): void{
    this.users = this.userService.getUsers();
    console.log(this.users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
