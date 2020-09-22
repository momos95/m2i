import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../modeles/user';

@Component({
  selector: 'app-voir-user',
  templateUrl: './voir-user.page.html',
  styleUrls: ['./voir-user.page.scss'],
})
export class VoirUserPage implements OnInit {

  user: User ;

  constructor(public service: UserService, public acRoute: ActivatedRoute) {
    this.user = new User() ;
    this.service.getOne(this.acRoute.snapshot.params.id).subscribe((response) => {
      this.user = response ;
    }) ;
  }

  ngOnInit() {
  }

}
