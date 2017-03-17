import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from "app/app-routing.animation";

@Component({
  selector: 'sf-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
