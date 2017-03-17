import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../app-routing.animation';

/**
 * Startsida efter inloggning
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'sf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class HomeComponent implements OnInit {

folders = [
    {
      name: 'Ulrika Eriksson',
      subject: 'Nytt ärende för Bobutik Kalmar med id: B24552',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
