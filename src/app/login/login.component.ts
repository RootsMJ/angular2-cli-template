import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../app-routing.animation';

@Component({
  selector: 'sf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/']);
  }
}
