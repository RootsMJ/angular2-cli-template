import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'app/app-routing.animation';

@Component({
  selector: 'sf-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
