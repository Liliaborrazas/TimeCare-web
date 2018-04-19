import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Event } from '../../shared/models/event.model';
import { SessionService } from '../../shared/services/session.service';
import { UsersService } from '../../shared/services/users.service';
import { EventService } from '../../shared/services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'] 

})
export class UserComponent implements OnInit {
  event = new Event();
  receptorId: string;
  eventId: string;

  constructor(
    private router: Router, 
    private routes:ActivatedRoute,
    private usersService: UsersService,
    private eventService: EventService
    
  ) { 
    this.routes.params.subscribe(params => {
      this.receptorId = params.id;
    })
    
  }

  ngOnInit() {
    
  }

  onSubmitValorationForm() { 
  }

}
