import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from "app/app-routing.animation";

@Component({
  selector: 'sf-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class TicketComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
