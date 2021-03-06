import { SessionService } from '../../../shared/services/session.service';
import { User } from '../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  apiError: string;

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit() { }

  onSubmitLoginForm(loginForm) {
  this.sessionService.authenticate(this.user).subscribe(
    (user) => {
      // loginForm.reset();
      this.router.navigate(['profile']);
    },
    (error) => {
      this.apiError = error.message;
    }
  );
}
}