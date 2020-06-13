import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  listaHeroe:any = {};

  constructor(private activated: ActivatedRoute, private heroeS:HeroesService) { 
    this.activated.params.subscribe(params => {this.listaHeroe=heroeS.getHeroe(params['id'])});
   }

  ngOnInit() {
  }







}
