import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private carouselImagePath: string;
  private carouselIndex = 1;

  constructor() {
    this.carouselImagePath = '/assets/images/login_pic_1.JPG';
  }

  ngOnInit() {
  }

  private changeImage(newIndex: number){
    if (newIndex < 1) { newIndex = 3; }
    if (newIndex > 3) { newIndex = 1; }

    this.carouselIndex = newIndex;
    const newImagePath = '/assets/images/login_pic_' + this.carouselIndex + '.JPG';
    this.carouselImagePath = newImagePath;
  }

}
