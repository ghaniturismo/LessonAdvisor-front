import { Component } from '@angular/core';

import { Login } from "../shared/interfaces/login";
import { LoginService } from '../shared/services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{

	
	private _login_data :Login;
	
	constructor (private _loginService :LoginService)
	{
	}
	
	
	
	submit (login :string, password :string)
	{
		this._login_data.login = login;
		this._login_data.password = password;
		
		this._loginService.login(this._login_data).subscribe(
			resp => {}
		);
	}
	

}
