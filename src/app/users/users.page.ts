import { Component, OnInit } from '@angular/core';
import {User} from '../modeles/user';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: User[] ;

  constructor(public userService: UserService, public router: Router) {
    this.userService.getAll().subscribe((response) => {
      this.users = response ;
    }) ;
  }

  ngOnInit() {
  }
}
