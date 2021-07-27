import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente/cliente.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clienteForm: FormGroup;
  cliente: any;
  isDisabled:any;
  public isClicked: boolean = false;
  
  constructor(
    public fb: FormBuilder,
    public clienteService: ClienteService
  ){

  }
  ngOnInit(): void {

    this.clienteForm = this.fb.group({

      idUsuario : ['',Validators.required, ],
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      edad : ['', Validators.required,],
      documento : [{ value: '', disabled: this.isDisabled }, Validators.required],
      email : ['', Validators.required],
      telefono : ['', Validators.required,]
    })
    this.clienteService.getAllClientes().subscribe(resp => {
      this.cliente=resp;
    })
  }

  guardar():void{
    this.clienteService.guardarUsuario(this.clienteForm.value).subscribe(resp => {
        this.clienteForm.reset();
        this.cliente.push(resp);
    },
    error => { console.error (error)}
    )
  
  }

  eliminarPorId(cliente:any){
    this.clienteService.eliminarPorId(cliente.idUsuario).subscribe(resp=>{
      console.log(resp)
      if(resp===true){
        this.cliente.pop(cliente)
      }
    })
  }

  actualizarCliente():void{
    this.clienteService.actualizarCliente(this.clienteForm.value).subscribe(resp=>{
      this.clienteForm.reset();
      this.cliente.push(resp);
    },error=>{console.error(error)})
  }

  editar(cliente:any){
    this.clienteForm.setValue({
      idUsuario : cliente.idUsuario,
      nombre : cliente.nombre,
      apellido : cliente.apellido,
      edad : cliente.edad,
      documento : cliente.documento,
      email : cliente.email,
      telefono : cliente.telefono
    })


   // var   num1= ((document.getElementById("cedulas") as HTMLInputElement).value);
   // console.log(num1);

    this.isClicked = true;
 
  }

     buscarDocumento(documento:string): void{
       this.clienteService.buscarIdentificacion(documento).subscribe(resp=>{
         this.cliente = resp
         console.log(resp)
       })
     }
  

}
