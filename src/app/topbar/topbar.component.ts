import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { User } from '../user';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  user: User = {
    id: 0,
    email: 'juvao@google.com',
    fullName: 'Juvao das Dores',
    profilePic: '/#',
    role: ['aluno', 'professor']
  };

  roleSelected = this.user.role[0];
  roles = this.user.role;   

  constructor() { }

  ngOnInit(): void {
  }

  

  roleChangeClick(role: string) {
    this.roleSelected = role;
  }

  getFirstName(){
    return this.user.fullName.split(' ')[0];
  }

  
}
