import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from './interface';
import { ApiService } from './api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  formulario:FormGroup;

  datos:UserResponse = {title:'',body:'',author:''};

  dato:UserResponse;
 
  constructor(private servicio:ApiService, private fb:FormBuilder){
    this.formulario = fb.group({
      title:['',Validators.required],
      body:['',Validators.compose([Validators.required, Validators.maxLength(25)])],
      author:['',Validators.required],
    })
    this.servicio.getdata().subscribe(data => {this.dato = data
    console.log(this.dato);
    
    });
  }

  ngOnInit(): void {  
    
  }

  public enviar(){
    // console.log(this.datos);
    this.servicio.agregar(this.datos);
    this.formulario.reset();
  }
  
  borrar(id){       
    if (confirm('¿Esta seguro de borrar la Nota?')){
      this.servicio.eliminar(id);      
    }
  }
  
}
