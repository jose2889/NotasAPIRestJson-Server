import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from './interface';

@Injectable()
export class ApiService {
  user:UserResponse;

  constructor(private http: HttpClient) {
    this.http.get<UserResponse>('http://localhost:3000/posts').subscribe(data => {
      this.user = data;
      console.log(data)
      console.log(this.user)
    },
    err => { 
      alert("Opss... Ha ocurrido un error en la operacion. revise la consola para mas detalles")
      console.log ("Ocurrió un error"+err);      
    });
   }
   agregar(){
    // aqui enviamos datos a la api
    const req = this.http.post('http://localhost:3000/posts', { 
      titulo: this.titulo, 
      cuerpo: this.body, 
      autor: this.autor 
    }) 
      .subscribe ( 
        res => { 
          console. log (res); 
        }, 
        err => { 
          console.log ("Ocurrió un error"); 
        } 
      );
  }
}