import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { PasswordService } from './services/password.service';
import { ImageStoreService } from './services/image-store.service';
import { ImageStoreInterceptor } from './services/image-store.interceptor';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PasswordService,
    ImageStoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ImageStoreInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
