import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];

  constructor( private _heroesService:HeroesService, private _router:Router ) { }

  ngOnInit() {
    this.heroes=this._heroesService.getHeroes();
  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]);
  }

}
