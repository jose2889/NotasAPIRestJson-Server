import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from './interface';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
    
   }

   public getdata() {
    return this.http.get<UserResponse>('http://localhost:3000/posts');
    // .subscribe(data => {
      
    //   console.log('por aqui paso')
     
    // },
    // err => { 
    //   alert("Opss... Ha ocurrido un error en la operacion. revise la consola para mas detalles")
    //   console.log ("Ocurrió un error"+err);      
    // });
   }

   agregar(datos:UserResponse){
    // aqui enviamos datos a la api
    const req = this.http.post('http://localhost:3000/posts', { 
      titulo: datos.title, 
      cuerpo: datos.body, 
      autor: datos.author 
    }) 
      .subscribe ( 
        res => { 
          console. log ("agregado con exito"); 
        }, 
        err => { 
          console.log ("Ocurrió un error"); 
        } 
      );
  }
}
