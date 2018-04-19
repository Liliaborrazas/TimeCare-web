import { UsersService } from '../../../shared/services/users.service';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';

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
    private usersService: UsersService
  ) {}

  onSubmitSignupForm() { 
    this.usersService.create(this.user).subscribe(
      (user) => {
        this.user = new User();
        this.router.navigate(['/profile']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

}