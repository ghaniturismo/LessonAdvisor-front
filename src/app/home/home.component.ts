import { Component } from '@angular/core';

import {Login} from "../shared/interfaces/login";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
{
	
	private _login_data :Login;
	
	constructor ()
	{}
	

}
