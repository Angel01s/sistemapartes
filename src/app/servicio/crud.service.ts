import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parte } from './Parte';
const API = 'http://bdp1.000webhostapp.com'
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private clientHttp: HttpClient) { }

  AgregarParte(CODIGO: string, CONTRASENIA: string, PERMISOID: number, NOMBRES: string) {
    return this.clientHttp.post(`${API}/add.php`, {CODIGO, CONTRASENIA, PERMISOID, NOMBRES});
  }
}
