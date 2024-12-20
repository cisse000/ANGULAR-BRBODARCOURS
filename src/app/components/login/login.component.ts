import { Component } from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {AuthService} from '../../sevices/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,ReactiveFormsModule, MatButtonModule, MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private authService: AuthService) { }
  submit() {
    if (this.loginForm.invalid) {
      return;
    }
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.login(username, password);
  }
}
