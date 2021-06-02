import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Capitán América";
  nombre2: string = "gAsPAr aufRAnC";
  arreglo = [1,2,3,4,5,6,7,8,9,10]
  PI: number = Math.PI
  porcentaje: number = 0.234;
  salario: number = 1234.5
  fecha: Date = new Date()
  idioma:string = 'es';
  activar: boolean = true;
  videoUrl: string = 'https://www.youtube.com/embed/5qap5aO4i9A'

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('llego la data')
    }, 4500)
  })

  heroe = {
    name: 'Logan',
    keyword: 'Wolverine',
    age: 500,
    address: {
      street: 'Primera',
      house: 20
    }
  }
}
