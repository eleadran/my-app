import { Component ,inject} from '@angular/core';
import { LoginService } from '../../service/login/loginService';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    private authService = inject (LoginService);

}
