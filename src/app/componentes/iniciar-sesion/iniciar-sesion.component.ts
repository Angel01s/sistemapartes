import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
interface Usuario{CODIGO:string, CONTRASENIA: string}
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  elID:any;
  constructor(
    private crudService:CrudService,
    private ruteador:Router,
    private fb:FormBuilder,
    private activeRoute:ActivatedRoute
    ) {
      
    }
  ngOnInit():void {
    this.validateForm=this.fb.group({
      CODIGO:[null,[Validators.required]],
      CONTRASENIA:[null,[Validators.required]]
    })
  }
  validateForm!:FormGroup;
  submitForm():void{
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
  }
  login(form:NgForm){
    const CODIGO=form.value.CODIGO
    const CONTRASENIA=form.value.CONTRASENIA
    this.ruteador.navigateByUrl('listar-usuarios') 
  }
  enviarDatosSesion():void{
    console.log("SIUUUUUUUUUUUUU");
    const CODIGO = this.validateForm.value.CODIGO;
    const CONTRASENIA = this.validateForm.value.CONTRASENIA;
    console.log(CODIGO + " " + CONTRASENIA);
    this.crudService.ObtenerUsuarios(CODIGO, CONTRASENIA).subscribe(
      rpt=>{
        if(rpt==0){
          console.log(rpt); 
        }
        else{
          console.log(rpt);
          this.ruteador.navigateByUrl('listar-usuarios')
        }
         
      }
    );
    
  }
}
