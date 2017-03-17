import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { TicketDepartmentComponent } from './ticket/ticket-department/ticket-department.component';
import { TicketCategoryComponent } from './ticket/ticket-category/ticket-category.component';
import { UserListComponent } from 'app/user/user-list/user-list.component';
import { StoreListComponent } from 'app/store/store-list/store-list.component';

const routes: Routes = [
  // Alla routes utan layout skrivs innan ROOT-route
  {
    path: 'login',
    component: LoginComponent
  },
  // ROOT-route
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      // Routes som ska visas med Layout
      {
        path: 'tickets',
        component: TicketListComponent
      },
      {
        path: 'tickets/department',
        component: TicketDepartmentComponent
      },
      {
        path: 'tickets/category',
        component: TicketCategoryComponent
      },

      {
        path: 'users',
        component: UserListComponent
      },

      {
        path: 'stores',
        component: StoreListComponent
      }
    ]
  }
];

/**
 * Modulen som styr all Routing.
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
