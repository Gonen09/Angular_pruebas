import { Component } from '@angular/core';

@Component({
  selector: 'Hello-world',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css']
})

export class HelloWorld{
  title = 'Hola Mundo!!!';
  activado = true;

  name: string = "Gonzalo Santander";
  age: number;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];

  constructor(){
    this.age = 27;
    this.address = {
     street : "Los Jazmines",
     city : "La Serena"
    }
    this.hobbies = ['Nadar', 'Leer', 'Escribir'];
  }
}