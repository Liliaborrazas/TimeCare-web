import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Event } from '../../shared/models/event.model';
import { SessionService } from '../../shared/services/session.service';
import { UsersService } from '../../shared/services/users.service';
import { EventService } from '../../shared/services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Valoration } from '../../shared/models/valoration.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'] 

})
export class UserComponent implements OnInit {
  event = new Event();
  valoration = new Valoration();
  receptorId: string;
  eventId: string;
  user = new User();
  apiError: string;


  constructor(
    private router: Router, 
    private routes:ActivatedRoute,
    private usersService: UsersService,
    private eventService: EventService,
    private sessionService: SessionService
    
  ) { 
    this.routes.params.subscribe(params => {
      this.receptorId = params.id;
      this.eventService.get(this.receptorId).subscribe( event => {
        this.event = event
      })
    })
    this.user = this.sessionService.getUser()
  }

  ngOnInit() {
    
  }

  onSubmitValorationForm() { 
    this.eventService.createValoration(this.valoration, this.receptorId).subscribe( event => {
        this.event = event;
        console.log(this.valoration);
        this.router.navigate(['valorations',this.user.id]);
    },
  (error) => {
    this.apiError = error.message;
  }
)
  }
}



