import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

   private API_SERVER = "http://localhost:8080/usuario/"
   

  constructor(
    private httpClient: HttpClient
  ) { }

  public guardarUsuario (cliente:any): Observable<any>{ 
    return this.httpClient.post(this.API_SERVER,cliente);
  }

  public getAllClientes(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public eliminarPorId(id:any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + id);
  }
  public actualizarCliente(cliente:any): Observable<any>{
    return this.httpClient.put(this.API_SERVER + cliente.idUsuario,cliente);
  }
  public buscarIdentificacion(documento:any): Observable<any>{
    return this.httpClient.get(this.API_SERVER + "/query?documento=" + documento)
  }


}
