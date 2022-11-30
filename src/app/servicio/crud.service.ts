import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parte } from './Parte';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string ='https://bdp1.000webhostapp.com/'
  constructor(private clientHttp:HttpClient) { }
  AgregarParte(datosParte:Parte):Observable<any>{
    return this.clientHttp.post(this.API+"?NE=1",datosParte);
  }
}
