import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'app/app-routing.animation';

@Component({
  selector: 'sf-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class TicketListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
