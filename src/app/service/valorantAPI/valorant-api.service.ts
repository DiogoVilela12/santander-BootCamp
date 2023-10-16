import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agente } from './Agente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValorantAPIService {

  url: string = "https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true";

  constructor(private http: HttpClient) { }

  getValorantData(): Observable<Agente> {
    return this.http.get<Agente>(`${this.url}`)
  }
}
