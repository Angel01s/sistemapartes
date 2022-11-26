import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-agregar-parte',
  templateUrl: './agregar-parte.component.html',
  styleUrls: ['./agregar-parte.component.css']
})
export class AgregarParteComponent {
  formularioParte:FormGroup;
  constructor(public formulario:FormBuilder){
    this.formularioParte=this.formulario.group({
      nombre:['']
    })
  }
  
  enviarDatos():any{
    console.log('SIUUUUUUUUUUUUU');
    console.log(this.formularioParte.value);
  }
}
