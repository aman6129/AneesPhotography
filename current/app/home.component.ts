import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <div class="toolbar">
        <span class="toolbar-icon">
            <!-- <img src="assets/logo-big.png" style="width: 100px;" /> -->
            <b>ANEES</b>PHOTOGRAPHY
        </span>
        <span class="button-group">
            <a class="toolbar-button" style="background-image: url('assets/searchicon.png');"></a>
            <a class="toolbar-button" style="background-image: url('assets/uploadicon.png');"></a>
            <a class="toolbar-button" style="background-image: url('assets/gearicon.png');"></a>
        </span>
    </div>
    <div class="content-container">
        <img src="assets/kiwi.jpg" class="image-single"/>
        <img src="assets/kiwi.jpg" class="image-single"/>

        <img src="assets/kiwi.jpg" class="image-thumb"/>
        <img src="assets/kiwi.jpg" class="image-thumb"/>
        <img src="assets/kiwi.jpg" class="image-thumb"/>



    </div>
  `
})

export class HomeComponent { }
