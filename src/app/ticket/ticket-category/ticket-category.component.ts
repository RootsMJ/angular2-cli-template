import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'app/app-routing.animation';

@Component({
  selector: 'sf-ticket-category',
  templateUrl: './ticket-category.component.html',
  styleUrls: ['./ticket-category.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class TicketCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
