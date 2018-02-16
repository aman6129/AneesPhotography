import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private carouselImagePath: string;

  constructor() {
    this.carouselImagePath = '/assets/images/kiwi1.JPG';
  }

  ngOnInit() {
  }

}
