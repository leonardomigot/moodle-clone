import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { User } from '../user';

import { UserService } from '../user.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  users: User[] = [];

  user = {
    id: 0,
    email: 'null',
    fullName: 'null',
    profilePic: 'null',
    role: ['null']
  };

  roleSelected = this.user.role[0];
  roles = this.user.role;   

  visibility: boolean = true;

  constructor(private userService: UserService) { }

  getUsers(): void{
    this.users = this.userService.getUsers();
    this.user = this.users[0];
    this.roleSelected = this.user.role[0];
    this.roles = this.user.role;
  }

  ngOnInit(): void {
    this.getUsers();
  }  

  roleChangeClick(role: string) {
    this.roleSelected = role;
  }

  getFirstName(){
    return this.user.fullName.split(' ')[0];
  }

  sidebarToggle(){
    this.visibility = !this.visibility; 
  }
}
