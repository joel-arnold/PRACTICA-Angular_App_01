import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo-pagina',
  templateUrl: './cuerpo-pagina.component.html',
  styleUrls: ['./cuerpo-pagina.component.css']
})
export class CuerpoPaginaComponent {
  titulo: string = 'Tarjeta'
  texto: string = 'Officia excepteur et esse fugiat aliqua in sit veniam proident in id.'
  mostrar: boolean = true;
  arreglo: any[] = ['una cosa', 147, true, 'otra cosa']
}
