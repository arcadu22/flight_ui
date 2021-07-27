import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiqueteService } from 'src/app/services/tiquete/tiquete.service';




@Component({
  selector: 'app-tiquete',
  templateUrl: './tiquete.component.html',
  styles: [
  ]
})
export class TiqueteComponent implements OnInit {

  tiqueteForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
