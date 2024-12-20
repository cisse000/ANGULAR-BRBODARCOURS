import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {TatoueurService} from '../../../sevices/tatoueur.service';

@Component({
  selector: 'app-tatoueur-create',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField,
    MatInput, MatLabel],
  templateUrl: './tatoueur-create.component.html',
  styleUrl: './tatoueur-create.component.css'
})
export class TatoueurCreateComponent {
  form!: FormGroup;
  constructor(private tatoueurService: TatoueurService, private router: Router ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      style: new FormControl('', Validators.required)
    });
  }
  submit(){
    this.tatoueurService.addTatoueur(this.form.value).subscribe((res:any) => {
      this.router.navigate(['/tatoueur']);
    })
  }
}
