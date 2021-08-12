import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  subjects: string[] = [];

  constructor(private userService: UserService) {
    
  }

  getSubjects(): void{
    let array = this.userService.getUsers()[0].subject;
    this.subjects = array;
  }

  ngOnInit(): void {
    this.getSubjects();
  }  

}
