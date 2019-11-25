import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service'; 

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent implements OnInit {

  nombre: string = 'Gonzalo Santander';
  edad: number = 27;

  posts = [];  //Recibir los datos

  constructor(private servicio: DatosService) {

    this.servicio.obtenerDatos().subscribe(info => {
      this.posts = info;
    });
   }

  ngOnInit() {
  }

  decirHola(parametro){
    alert("Hola " + parametro);
  }

  enviarDatos(newUser){

    alert("Usuario: " + newUser.value);
    newUser.value = ''; // vaciamos campo
    newUser.focus(); //Pone el curson dentro del campo
    return false; //cancelamos el envio de los datos al servidor, con su respectiva recarga de pagina
  }

}
