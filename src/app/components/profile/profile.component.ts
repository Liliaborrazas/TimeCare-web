
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { SessionService } from '../../shared/services/session.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent{

  constructor( private sessionService: SessionService ) { }

  ngOnInit() {
  }

}









