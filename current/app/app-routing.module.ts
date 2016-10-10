import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent }  from './login.component';
import { HomeComponent }   from './home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
