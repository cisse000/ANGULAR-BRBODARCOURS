import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tatoueur} from '../model/tatoueur.model';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TatoueurService {
//Variable de classe contenant l'url de notre API
  private apiUrl = 'http://localhost:8080/tatoueurs';
  constructor(private http: HttpClient, private auth: AuthService) {}
//fonction getTatoueur : va utiliser http GET pour récupérer la liste JSON
// //Depuis l'url de l'API.
  getTatoueurs():Observable<Tatoueur[]>{
    let tatoueurs = this.http.get<Tatoueur[]>(this.apiUrl);
    return tatoueurs;
  }
  addTatoueur(tatoueur:Tatoueur): Observable<any> {
    return this.http.post(this.apiUrl, JSON.stringify(tatoueur), {headers:this.auth.headers});
  }
  findById(id:number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id)
  }
  update(id:number, tatoueur:Tatoueur): Observable<any> {
    return this.http.put(this.apiUrl + '/' + id, JSON.stringify(tatoueur), {headers:this.auth.headers})
  }
  delete(id:number) {
    return this.http.delete(this.apiUrl + '/' + id, {headers:this.auth.headers})
  }
}
