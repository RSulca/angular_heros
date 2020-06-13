import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService{
    private listaHeroe:any[] = [
        {
          ide:0,
          nombre: "IronMan",
          bio: "Inteligencia y tecnología.",
          img: "assets/img/ironman.jpg",
          aparicion: "1941-11-01",
          casa:"Marvel"
        },
        {
          ide:1,
          nombre: "AntMan",
          bio: "Capacidad de cambiar de tamaño y tener control sobre todo tipo de insecto.",
          img: "assets/img/antman.jpg",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          ide:2,
          nombre: "Bruja-Escarlata",
          bio: "Manipula las artes misticas oscuras a la perfección.",
          img: "assets/img/bruja-escarlata.jpg",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          ide:3,
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.jpg",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          ide:4,
          nombre: "Doctor-Strange",
          bio: "Manipula el tiempo y domina las artes místicas.",
          img: "assets/img/doctor-strange.jpg",
          aparicion: "1940-06-01",
          casa: "Marvel"
        },
        {
          ide:5,
          nombre: "Capitan-America",
          bio: "Posée súper fuerzaa y valor.",
          img: "assets/img/capitan-america.jpg",
          aparicion: "1964-01-31",
          casa: "Marvel"
        },
        {
          ide:6,
          nombre: "Groot",
          bio: "Posée valor, superfuerza además de manipular su tamaño y ser inmortal.",
          img: "assets/img/groot.jpg",
          aparicion: "1964-01-21",
          casa: "Marvel"
        },
        {
          ide:7,
          nombre: "Thor",
          bio: "Posée súper fuerzaa, valor y es el Dios del trueno.",
          img: "assets/img/thor.jpg",
          aparicion: "1964-01-11",
          casa: "Marvel"
        },
        {
          ide:8,
          nombre: "Hawkeye",
          bio: "Posée gran habilidad en el manejo del arco y conoce de artes marciales.",
          img: "assets/img/hawkeye.jpg",
          aparicion: "1944-01-01",
          casa: "Marvel"
        },
        {
          ide:9,
          nombre: "Viuda-Negra",
          bio: "Conocedora de todo tipo de artes marciales y grán espia.",
          img: "assets/img/viuda-negra.jpg",
          aparicion: "1924-01-01",
          casa: "Marvel"
        }
      ];
    constructor(){
        console.log("Servicio listo.");
    }

    public getHeroes(){
        return this.listaHeroe; 
    }

    public getHeroe(idx:string){
      return this.listaHeroe[idx];
    }

    public buscarHeroe(nombreH:string){
      /**nombreH=nombreH.toLowerCase();
      let onlyHeroe:any;
      for(let i:number=0;i<this.listaHeroe.length;i++){
        if(this.listaHeroe[i].nombre.toLowerCase() == nombreH){
          onlyHeroe=this.listaHeroe[i];
        }
      }
      console.log(onlyHeroe);
      if(onlyHeroe!=null){
        return onlyHeroe;
      }else{
        return null;
      }**/
      let lHeroe:any[] = [];
      nombreH=nombreH.toLowerCase();
      /**for(let heroe of this.listaHeroe){**/
        for(let i:number=0;i<this.listaHeroe.length;i++){
          let heroe = this.listaHeroe[i];
        if(heroe.nombre.toLowerCase().indexOf(nombreH)>=0){
          lHeroe.push(heroe); 
        }
      }
      return lHeroe;
    }

}
