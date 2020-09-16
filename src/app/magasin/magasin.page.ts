import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.page.html',
  styleUrls: ['./magasin.page.scss'],
})
export class MagasinPage implements OnInit {

  constructor(public router: Router) { }

  goToAddArticle(){
    this.router.navigateByUrl('/add-article') ;
  }

  goToListArticle(){
    this.router.navigateByUrl('/list-article') ;
  }

  ngOnInit() {
  }

}
