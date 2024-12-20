import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
//Ce code récupère un username et un password, l’ajoute en tant que Basic Auth
// dans les requêtes json, et fait un simple http get sur tatoueur pour vérifier si
// l’authentification fonctionne.
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  public authenticated = false;
  public headers= new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient,private router: Router) { }
  login(username: string | null | undefined, password: string | null | undefined) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(username + ':' + password)
    });
    this.http.get(`${this.baseUrl}/tatoueurs`, { headers:this.headers }).subscribe({
      next: (response) => {
        this.authenticated=true;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.authenticated=false;
        this.headers=new HttpHeaders({
          'Content-Type': 'application/json'
        });
      }
    });
    return this.authenticated;
  }
  logout(){
    this.authenticated=false;
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.router.navigate(['/login']);
  }
}
