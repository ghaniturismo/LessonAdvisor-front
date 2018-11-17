import { Component } from '@angular/core';

import {Login} from "../shared/interfaces/login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  private _login_data: Login;



}
