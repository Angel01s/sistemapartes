import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
@Component({
  selector: 'app-agregar-parte',
  templateUrl: './agregar-parte.component.html',
  styleUrls: ['./agregar-parte.component.css']
})
export class AgregarParteComponent {
  formularioParte:FormGroup;
  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService
    )
  {
    this.formularioParte=this.formulario.group({
      'CODIGO':['']
    })
  }
  
  enviarDatos():any{
    console.log('SIUUUUUUUUUUUUU');
    console.log(this.formularioParte.value);
    this.crudService.AgregarParte(this.formularioParte.value).subscribe();
  }
}
