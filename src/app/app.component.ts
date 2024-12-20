import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {CookieComponent} from './cookie/cookie.component';
import {TatoueurComponent} from './components/tatoueur/tatoueur.component';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatListItem, MatNavList} from '@angular/material/list';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './sevices/auth.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  MatSidenavContent, RouterLink, MatToolbar, MatIcon, MatListItem, MatNavList, MatSidenav, MatSidenavContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'chez cisse';
  date = new Date();
//Ce code appelle notre service d’authentification et récupère un booléen : si l’user
// est connecté ou non.
  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
  }
  authenticated() { return this.auth.authenticated; }

  logout(){this.auth.logout();}
}




