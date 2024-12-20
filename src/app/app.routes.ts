import { Routes } from '@angular/router';
import {TatoueurComponent} from './components/tatoueur/tatoueur.component';
import {LoginComponent} from './components/login/login.component';
import {TatoueurViewComponent} from './components/tatoueur/tatoueur-view/tatoueur-view.component';
import {TatoueurCreateComponent} from './components/tatoueur/tatoueur-create/tatoueur-create.component';
import {TatoueurEditComponent} from './components/tatoueur/tatoueur-edit/tatoueur-edit.component';
export const routes: Routes = [
  {
    path: 'tatoueur',
    title: 'Nos tatoueurs',
    component: TatoueurComponent,
  },
  {
    path: 'tatoueur/:tatoueurId/view',
    component: TatoueurViewComponent
  },
  {
    path: 'tatoueur/create',
    component: TatoueurCreateComponent
  },
  {
    path: 'tatoueur/:tatoueurId/edit',
    component: TatoueurEditComponent
  },
  {
    path: 'login',
    title: 'Se connecter',
    component: LoginComponent,
  },
];
