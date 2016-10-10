"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n    <div class=\"toolbar\">\n        <span class=\"toolbar-icon\">\n            <!-- <img src=\"assets/logo-big.png\" style=\"width: 100px;\" /> -->\n            <b>ANEES</b>PHOTOGRAPHY\n        </span>\n        <span class=\"button-group\">\n            <a class=\"toolbar-button\" style=\"background-image: url('assets/searchicon.png');\"></a>\n            <a class=\"toolbar-button\" style=\"background-image: url('assets/uploadicon.png');\"></a>\n            <a class=\"toolbar-button\" style=\"background-image: url('assets/gearicon.png');\"></a>\n        </span>\n    </div>\n    <div class=\"content-container\">\n        <img src=\"assets/kiwi.jpg\" class=\"image-single\"/>\n        <img src=\"assets/kiwi.jpg\" class=\"image-single\"/>\n\n        <img src=\"assets/kiwi.jpg\" class=\"image-thumb\"/>\n        <img src=\"assets/kiwi.jpg\" class=\"image-thumb\"/>\n        <img src=\"assets/kiwi.jpg\" class=\"image-thumb\"/>\n\n\n\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map