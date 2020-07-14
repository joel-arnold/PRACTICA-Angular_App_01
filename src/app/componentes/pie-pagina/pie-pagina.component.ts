import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css']
})
export class PiePaginaComponent { 
    anio: number

    constructor(){
      this.anio = new Date().getFullYear()
    }
}
