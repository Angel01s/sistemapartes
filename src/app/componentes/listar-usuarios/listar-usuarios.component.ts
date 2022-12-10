import { Component } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';
@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent {
  usuarios:any;
  constructor(
    private crudService:CrudService
  ){}
  ngOnInit():void{
    this.crudService.Usuarios().subscribe(rpt=>{
      console.log(rpt);
    })
  }
}
