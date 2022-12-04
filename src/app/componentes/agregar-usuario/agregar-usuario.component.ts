import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
interface Usuario{CODIGO:string, CONTRASENIA: string, PERMISOID: number, NOMBRES: string}
@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit{

  constructor(
    private crudService:CrudService,
    private fb:FormBuilder
    )
  {}
  validateForm:FormGroup
  ngOnInit(): void{
    this.validateForm=this.fb.group({
      CODIGO:[null,[Validators.required]],
      CONTRASENIA:[null,[Validators.required]],
      PERMISOID:[null,[Validators.required]],
      NOMBRES:[null,[Validators.required]]
    })
  }
  submitForm():void{
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
  }
  enviarDatos():void{
    console.log("SIUUUUUUUUUUUUU");
  }
}
