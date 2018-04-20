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
  selector: 'app-valoration-list',
  templateUrl: './valoration-list.component.html',
  styleUrls: ['./valoration-list.component.css']
})
export class ValorationListComponent implements OnInit {
  valorations: Array<Valoration> = [];
  eventId: string;



  constructor(
    private router: Router, 
    private routes:ActivatedRoute,
    private usersService: UsersService,
    private eventService: EventService,
    private sessionService: SessionService
    
  ) {
    this.routes.params.subscribe(params => {
      this.eventId = params.id;
      this.eventService.get(this.eventId).subscribe( event => {
        this.valorations = event.valorations;
      })
    })
    
  } 

  

  ngOnInit() {
  }

}
