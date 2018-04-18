import { Component, OnInit } from '@angular/core';
import { Event } from './../../../shared/models/event.model';
import { EventService } from '../../../shared/services/event.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SessionService } from '../../../shared/services/session.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {
  event: Event = new Event();
  user: User = new User();
  apiError: string;

  constructor(
    private router: Router,
    private eventService: EventService,
    private sessionService: SessionService
  ) { }


  ngOnInit() {
    this.user=this.sessionService.getUser();

  }


  onSubmitCreateForm(eventForm: NgForm) {
    this.event.creator=this.user.id;
    console.log(this.event);
    
    this.eventService.create(this.event).subscribe(
      (event) => {
        eventForm.reset();
        this.router.navigate(['event/list']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

}
  







  
  

  