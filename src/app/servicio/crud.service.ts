import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parte } from './Parte';
const API = 'https://api-b128.herokuapp.com/insertarU.php'
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private clientHttp: HttpClient) { }

  AgregarParte(CODIGO: string, CONTRASENIA: string, PERMISOID: number, NOMBRES: string) {
    return this.clientHttp.post(`${API}`, {CODIGO, CONTRASENIA, PERMISOID, NOMBRES});
  }
}
