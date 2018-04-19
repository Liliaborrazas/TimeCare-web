import { UsersService } from '../../../shared/services/users.service';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../shared/services/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = new User();
  apiError: string;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private sessionService: SessionService
  ) {}

  onSubmitSignupForm() { 
    this.usersService.create(this.user).subscribe(
      (user) => {
        const loginUser = {
          email: this.user.email,
          password: this.user.password,
        }
        this.sessionService.authenticate(loginUser).subscribe(
          (loggedUser) => {
            // loginForm.reset();
            this.router.navigate(['profile']);
          },
          (error) => {
            this.apiError = error.message;
          }
        );
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

}