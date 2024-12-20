import {RouterLink, RouterOutlet} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Tatoueur} from '../../model/tatoueur.model';
import {AuthService} from '../../sevices/auth.service';
import {TatoueurService} from '../../sevices/tatoueur.service';


import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatAnchor, MatButton} from '@angular/material/button';
import {MatPaginator} from '@angular/material/paginator';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-tatoueur',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatTable, MatColumnDef, MatHeaderCell, MatCell, MatAnchor,
    MatButton, MatHeaderRow, MatRow, MatRowDef, MatHeaderRowDef, MatCellDef, MatHeaderCellDef,
    NgIf],
  templateUrl: './tatoueur.component.html',
  styleUrl: './tatoueur.component.css'
})
export class TatoueurComponent implements OnInit{
//Variable de classe qui contiendra notre tableau de tatoueurs
  tatoueurs:Tatoueur[]=[];
  displayedColumns: string[] = ['nom', 'style', 'action'];
  constructor(private auth: AuthService,private tatoueurService: TatoueurService) { }
  authenticated() { return this.auth.authenticated; }
//Fonction exécutée à l'initiation du component
  ngOnInit():void{
//Récupère les données du tatoueurService.
    this.tatoueurService.getTatoueurs().subscribe((data:Tatoueur[])=> {
//Mets les données dans notre variable de classe tatoueurs
      this.tatoueurs = data;
    });
  }
  deleteTatoueur(id:number){
    this.tatoueurService.delete(id).subscribe(res => {
      this.tatoueurs = this.tatoueurs.filter(item => item.id !== id);
    })
  }
}
