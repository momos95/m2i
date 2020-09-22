import { Component, OnInit } from '@angular/core';
import {Annonce} from '../modeles/annonce';
import {AnnonceService} from '../services/annonce.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.page.html',
  styleUrls: ['./list-annonces.page.scss'],
})
export class ListAnnoncesPage implements OnInit {

  annonces: Annonce[] ;

  constructor(private annonceServ: AnnonceService) {
    this.annonceServ.getAll().subscribe((response) => {
      this.annonces = response ;
    }) ;
  }

  ngOnInit() {
  }

}
