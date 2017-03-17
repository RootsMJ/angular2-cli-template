import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'app/app-routing.animation';

@Component({
  selector: 'sf-ticket-department',
  templateUrl: './ticket-department.component.html',
  styleUrls: ['./ticket-department.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class TicketDepartmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
