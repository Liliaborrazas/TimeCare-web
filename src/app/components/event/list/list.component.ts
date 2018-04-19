import { SessionService } from './../../../shared/services/session.service';
import { Component, OnInit } from '@angular/core';
import { Event } from './../../../shared/models/event.model';
import { User } from '../../../shared/models/user.model';
import { EventService } from '../../../shared/services/event.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  events: Array<Event> = [];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.list()
      .subscribe((events) => this.events = events);
  }
  }






  

  
  