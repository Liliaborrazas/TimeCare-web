import { Component, OnInit } from '@angular/core';
import { Event } from './../../../shared/models/event.model';
import { EventService } from '../../../shared/services/event.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {
  event: Event = new Event();
  apiError: string;

  constructor(
    private router: Router,
    private eventService: EventService
  ) { }

  onSubmitCreateForm(eventForm: NgForm) {
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
  







  
  

  