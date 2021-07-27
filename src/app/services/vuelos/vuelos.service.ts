import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  private API_SERVER = "http://localhost:8080/avion"



  constructor(
    private httpClient: HttpClient
  ) { }

  public guardarVuelo (cliente:any): Observable<any>{ 
    return this.httpClient.post(this.API_SERVER,cliente);
  }

  public getAllVuelo(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public eliminarPorId(id:any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + id);
  }
  public actualizarvuelo(cliente:any): Observable<any>{
    return this.httpClient.put(this.API_SERVER + cliente.idUsuario,cliente);
  }
  public buscarVuelo(id:any): Observable<any>{
    return this.httpClient.get(this.API_SERVER + "/query?id=" + id)
  }

}
