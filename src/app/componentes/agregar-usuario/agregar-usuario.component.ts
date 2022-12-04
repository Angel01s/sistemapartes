import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent {
  formularioUsuario:FormGroup;
  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService
    )
  {
    this.formularioUsuario=this.formulario.group({
      CODIGO:[''],
      CONTRASENIA:[''],
      PERMISOID:[''],
      NOMBRES:['']
    })
  }
  ngOnInit(): void{

  }
  enviarDatos():any{
    console.log('SIUUU SALIOO');
    console.log(this.formularioUsuario.value);
    this.crudService.AgregarParte(this.formularioUsuario.value).subscribe();
  }
}
