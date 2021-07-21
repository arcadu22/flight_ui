import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from './services/cliente/cliente.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
 
  clienteForm: FormGroup;




  constructor(
    public fb: FormBuilder,
    public clienteService: ClienteService
  ){

  }
  ngOnInit(): void {
   
    this.clienteForm = this.fb.group({

    //  idUsuario : ['', Validators.required],
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      edad : ['', Validators.required],
      documento : ['', Validators.required],
      email : ['', Validators.required],
      telefono : ['', Validators.required]
    })

  }

  guardar():void{

  }

}
