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
export class UserListComponent implements OnInit, OnDestroy, AfterViewChecked {

  shownUsers: User[] = [];
  shownUserDetail: User;

  allUsers: User[] = [ ];
  selectedUsers: User[] = [ ];

  userSubscription: Subscription;
  clickListeners: Function[] = [ ];

  shownUsersTypeGroup: string;
  respondActive: boolean;

  @ViewChildren('userList')
  userList: QueryList<ElementRef>;

  constructor(
    private userService: UserService,
    private renderer: Renderer,
    public composeDialog: MdDialog,
    private snackBar: MdSnackBar,
  ) { }

  ngOnInit() {

      this.allUsers = this.userService.getAllUsers();

      this.shownUsers = this.allUsers;
    // this.setShownMailsByGroup('primary');
  }

  ngAfterViewChecked() {
    this.createMailListClickListeners();
  }

  // openComposeDialog() {
  //   let dialogRef = this.composeDialog.open(InboxComposeComponent);
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.snackBar.open(result);
  //     }
  //   });
  // }

  createMailListClickListeners() {
    this.clickListeners.forEach((listener) => {
      listener();
    });

    this.userList.forEach((elem, index) => {
      this.clickListeners.push(
        this.renderer.listen(elem.nativeElement, 'click', (event) => {
          if (event.target.className != 'md-checkbox-inner-container' && event.target.className != 'md-ripple-background') {
            this.showUserDetail(this.shownUsers[index]);
          }
        })
      );
    });
  }

  resetTemporaries() {
    this.shownUserDetail = null;
    this.respondActive = false;
  }

  showUserDetail(user: User) {
    this.shownUserDetail = user;
  }

  // setShownMailsByGroup(group: string) {
  //   this.shownUsers = this.allUsers.filter((mail) => {
  //     return (mail.group == group)
  //   });

  //   this.shownUsersTypeGroup = group;
  //   this.resetTemporaries();
  // }

  // setShownMailsByType(type: string) {
  //   this.shownUsers = this.allUsers.filter((mail) => {
  //     return (mail.type == type)
  //   });

  //   this.shownUsersTypeGroup = type;
  //   this.resetTemporaries();
  // }

  setShownMailsToStarred() {
    this.shownUsers = this.allUsers.filter((user) => {
      return (user.starred == true)
    });

    this.shownUsersTypeGroup = 'starred';
    this.resetTemporaries();
  }

  toggleSelectAllThreads() {
    if (this.selectedUsers && this.selectedUsers.length > 0) {
      this.selectedUsers = this.shownUsers;
    } else {
      this.selectedUsers = [ ];
    }
  }

  toggleStarred(user: User) {
    user.starred = !user.starred;
  }

  isSelected(mail) {
    return _.includes(this.selectedUsers, mail);
  }

  // unreadMailsCount(group): string {
  //   let count = this.allUsers.filter((mail) => { return (mail.read == false && mail.group == group) }).length;
  //   let text = '';

  //   if (count > 0) {
  //     text = `(${count})`
  //   }

  //   return text;
  // }

  setRespondActive(active: boolean) {
    this.respondActive = active;
  }

  ngOnDestroy() {
    // this.userSubscription.unsubscribe();

    this.clickListeners.forEach((listener) => {
      listener();
    });
  }
}
