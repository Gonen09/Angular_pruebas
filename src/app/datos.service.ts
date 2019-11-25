import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private clienteHttp: HttpClient) {
    console.log('Llamado a Servicio funcionando');
  }

  obtenerDatos(){
    return this.clienteHttp.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
