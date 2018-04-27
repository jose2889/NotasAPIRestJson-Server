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

  titulo:string;
  body:string;
  autor:string;
  user:UserResponse;
  
  constructor(private servicio:ApiService){}

  ngOnInit(): void {
   
    
  }
  
  
}
