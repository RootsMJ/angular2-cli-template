import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

// Plugins
import 'hammerjs';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { SidenavItemComponent } from './layout/sidenav-item/sidenav-item.component';
import { QuickpanelComponent } from './layout/quickpanel/quickpanel.component';
import { SearchComponent } from './core/search/search.component';
import { BreadcrumbsComponent } from './core/breadcrumbs/breadcrumbs.component';
import { HomeComponent } from './home/home.component';

// Services
import { SidenavService } from './layout/sidenav/sidenav.service';
import { BreadcrumbService } from './core/breadcrumbs/breadcrumbs.service';
import { IconSidenavDirective } from './layout/sidenav/icon-sidenav.directive';
import { LoadingOverlayComponent } from './core/loading-overlay/loading-overlay.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { TicketDepartmentComponent } from './ticket/ticket-department/ticket-department.component';
import { TicketCategoryComponent } from './ticket/ticket-category/ticket-category.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { StoreComponent } from './store/store.component';
import { StoreListComponent } from './store/store-list/store-list.component';


const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    QuickpanelComponent,
    SidenavComponent,
    SidenavItemComponent,
    BreadcrumbsComponent,
    SearchComponent,
    HomeComponent,
    IconSidenavDirective,
    LoadingOverlayComponent,
    TicketComponent,
    TicketListComponent,
    TicketDepartmentComponent,
    TicketCategoryComponent,
    UserComponent,
    UserListComponent,
    StoreComponent,
    StoreListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    PerfectScrollbarModule.forRoot(perfectScrollbarConfig)
  ],
  providers: [
    SidenavService,
    BreadcrumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
