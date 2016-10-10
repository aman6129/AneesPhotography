import { Component } from '@angular/core';

@Component({
  selector: 'login',
  template: `
      <div class="login-container">
        <div class="title-container">
            <b>ANEES</b><br />
            PHOTOGRAPHY
        </div>
        <span class="login-group">
            <input type="password" placeholder="password" class="login-input" />
            <a class="login-button" routerLink="/home" routerLinkActive="active"><img src="assets/login-button.png" style="width: 35px;"/></a>
        </span>
        <div class="logo">
            <img src="assets/logo.png" style="width: 60px;" />
        </div>
      </div>
  `
})

export class LoginComponent { }
