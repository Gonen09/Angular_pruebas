import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventana',
  templateUrl: './ventana.component.html',
  styleUrls: ['./ventana.component.css']
})
export class VentanaComponent implements OnInit {

  users = ['Diego Gonzalez', 'Gustavo Valdebenito', 'Leandro Pasten', 'Gonzalo Santander'];

  constructor() { }

  ngOnInit() {
  }

}
