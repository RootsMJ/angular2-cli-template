import {
  Component, OnInit, OnDestroy, ViewChildren, QueryList, ElementRef,
  Renderer, AfterViewChecked
} from '@angular/core';
import {fadeInAnimation} from 'app/app-routing.animation';
import * as _ from 'lodash';
import {Subscription} from 'rxjs/Subscription';
import { MdDialog, MdSnackBar } from '@angular/material';
import { User } from 'app/user/user.model';
import { UserService } from 'app/user/user.service';

@Component({
  selector: 'sf-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ],
  providers: [
    UserService
  ]
})
export class UserListComponent implements OnInit {
  ngOnInit() {
  }
}
