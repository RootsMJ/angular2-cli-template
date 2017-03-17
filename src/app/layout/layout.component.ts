import {Component, OnInit, Inject, ViewChild, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Router, NavigationEnd} from '@angular/router';
// import * as screenfull from 'screenfull';

@Component({
  selector: 'sf-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  @ViewChild('sidenav')
  sidenav;

  private _mediaSubscription: Subscription;
  sidenavOpen = false;
  sidenavMode = 'side';
  isMobile = false;

  private _routerEventsSubscription: Subscription;

  quickpanelOpen = false;

  isFullscreen = false;

  constructor(
    private media: ObservableMedia,
    private router: Router,
  ) { }

  ngOnInit() {
    this._mediaSubscription = this.media.asObservable().subscribe((change: MediaChange) => {
      const isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');

      this.isMobile = isMobile;
      this.sidenavMode = (isMobile) ? 'over' : 'side';
      this.sidenavOpen = !isMobile;
    });

    this._routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.isMobile) {
        this.sidenav.close();
      }
    });
  }

  // Fullscreen Mode
  // toggleFullscreen() {
  //   if (screenfull.enabled) {
  //     screenfull.toggle();
  //     this.isFullscreen = !this.isFullscreen;
  //   }
  // }

  ngOnDestroy(): void {
    this._mediaSubscription.unsubscribe();
  }

  onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
}
