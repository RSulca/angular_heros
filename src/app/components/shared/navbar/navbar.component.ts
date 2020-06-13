import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../../servicios/heroes.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {



  constructor(private servicioHeroe:HeroesService, private _router:Router) {
    
   }

  ngOnInit() {
  }

/**  buscarHeroe(nombre:string){
    this.servicioHeroe.buscarHeroe(nombre);
    console.log(nombre);
  }**/

  verResultado(nombre:string){
    this._router.navigate(['/result',nombre]);
  }

}
