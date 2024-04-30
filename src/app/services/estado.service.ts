import { Observer } from 'dot-prop/node_modules/type-fest/source/observable-like';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../interfaces/Estado';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private estadosURL ="https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  constructor(private http: HttpClient) { 
  }

  estados:Estado[] = [
  ];

  listar():Observable<Estado[]>{
  
    return this.http.get<Estado[]>(this.estadosURL) as Observable<Estado[]>;
  }  

}
