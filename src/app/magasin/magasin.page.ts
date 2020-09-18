import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MagasinService} from '../services/magasin.service';

@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.page.html',
  styleUrls: ['./magasin.page.scss'],
})
export class MagasinPage implements OnInit {

  constructor(public service: MagasinService) { }
  ngOnInit() {
  }

  reset(){
    this.service.clear() ;
  }

}
