import { Component ,inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../service/login/loginService';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  // ...existing code...
}