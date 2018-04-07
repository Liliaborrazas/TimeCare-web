import { Component } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { SessionService } from '../../../shared/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  error: string;

  constructor(
    private sessionService: SessionService) {}

  onSubmitLoginForm() {
    this.sessionService
      .authenticate(this.user)
      .subscribe(
        user => { 
          console.log('Authenticated');
        },
        error => {
          this.error = error.message;
        }
      );
  }

}
