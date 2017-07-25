import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http'
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Mensaje} from './mensaje';
import {Estatus} from './estatus';

@Injectable()
export class MensajeService {
  estatus:Estatus;
miUrl:string='http://localhost:9000/mensaje';
private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http:Http) { }

  getMensajes():Observable<Mensaje[]>{
    return this.http.get(this.miUrl).map((respuesta:Response)=><Mensaje []>respuesta.json())
  }

  getMensaje(id:string):Observable<Mensaje>{
    return this.http.get(this.miUrl+'/'+id).map((respuesta:Response)=><Mensaje>respuesta.json());
  }

  guardarMensaje(mensa:Mensaje):Observable<Estatus>{
    return this.http.post(this.miUrl, JSON.stringify(mensa),{headers:this.headers}).map((respuesta:Response)=><Estatus>respuesta.json());
  }

  actualizarMensaje(mensa:Mensaje):Observable<Estatus>{
   return this.http.put(this.miUrl, JSON.stringify(mensa),{headers:this.headers}).map((respuesta:Response)=><Estatus>respuesta.json());
  }

/* El siguiente  aunque es directo no se recomienda, es mejor obtener el retorno
 de Observable<Estatus> y en la componente inyectar el servicio a través del metodo subscribe(tuObservador).

  actualizarMensaje2(mensa:Mensaje){
   return this.http.put(this.miUrl, JSON.stringify(mensa),{headers:this.headers})
    .map((respuesta:Response)=><Estatus>respuesta.json()).subscribe(estatus=>this.estatus=estatus);
    }
  */

  borrarMensaje(id:string):Observable<Estatus>{
    return this.http.delete(this.miUrl+'/'+id).map((respuesta:Response)=><Estatus>respuesta.json());   
  }
}