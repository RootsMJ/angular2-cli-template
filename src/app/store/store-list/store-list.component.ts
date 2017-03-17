import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'app/app-routing.animation';

@Component({
  selector: 'sf-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class StoreListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
