import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {APP_ROUTES} from './app.routes';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
