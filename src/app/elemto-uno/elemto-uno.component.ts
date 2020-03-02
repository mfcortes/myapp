import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elemto-uno',
  templateUrl: './elemto-uno.component.html',
  styleUrls: ['./elemto-uno.component.scss']
})
export class ElemtoUnoComponent implements OnInit {
  title = 'Titulo de la Aplicacion';
  rspTitle = this.title;
  color = '#455913';
  srcImagen = 'https://loremflickr.com/200/150';
  nvaTarea: string= '';

  listaaComandos: string[] = [
    'Login',
    'Crear Proyecto',
    'Consultar Proyecto',
    'Eliminar Proyecto'
  ]

  changeTitle(strPaso: string){
    this.title = strPaso;
  }
  recuperaTitle(){
    this.title = this.rspTitle;
  }
  generaColorRnd(){
    const letras = '0123456789ABCDEF';

    this.color = '#';
    for (let i = 0; i < 6; i++)
    {
      this.color += letras[ Math.round( Math.random() * 16 )];
    }
    console.log('Color ' + this.color);
  }

  actializaFoto()
  {
      const numAleatx = Math.round(190 + (Math.random() * 10));
      const numAleaty = Math.round(140 + ( Math.random() * 10));
      const str = 'https://loremflickr.com/' + numAleatx + '/' + numAleaty;
      this.srcImagen = str;
  }

  insertarTarea()
  {
    this.listaaComandos.push(this.nvaTarea);
    this.nvaTarea = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
