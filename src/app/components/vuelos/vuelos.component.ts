import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VuelosService } from 'src/app/services/vuelos/vuelos.service';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {

  
  vueloForm: FormGroup;
  vuelo: any;
  



  constructor(
    public fb: FormBuilder,
    public vueloService: VuelosService
  ) { }

  ngOnInit(): void {
    this.vueloForm = this.fb.group({

      idAvion : ['',Validators.required, ],
      topoAvion : ['', Validators.required],
      capacidad : ['', Validators.required],
      matricula : ['', Validators.required,],
      empresa : ['', Validators.required,]
    
    })
    this.vueloService.getAllVuelo().subscribe(resp => {
      this.vuelo=resp;
    })
  }

  }

