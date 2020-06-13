import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  listaHeroe:any = {};
  nombre:string;

  constructor(private activated: ActivatedRoute, private heroeS:HeroesService, private _router:Router) { 
    this.activated.params.subscribe(params => {this.nombre=params['nombre'];this.listaHeroe=heroeS.buscarHeroe(params['nombre'])});
  }
  ngOnInit() {
  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]);
  }
  


}
