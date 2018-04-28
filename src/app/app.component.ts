import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from './interface';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  
  datos:UserResponse = {title:'',body:'',author:''};

  dato:UserResponse;
 
  constructor(private servicio:ApiService){
    this.servicio.getdata().subscribe(data => {this.dato = data
    console.log(this.dato);
    
    });
  }

  ngOnInit(): void {  
    
  }

  public enviar(){
    // console.log(this.datos);
    this.servicio.agregar(this.datos);
    this.datos = {title:'',body:'',author:''};
  }
  
  borrar(){       
    this.servicio.eliminar();
  }
  
}
