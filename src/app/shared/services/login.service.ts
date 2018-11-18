import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


import { environment } from '../../../environments/environment';

import { Login } from '../interfaces/login';



@Injectable({
  providedIn: 'root'
})
export class LoginService
{

	
	private readonly _backendURL :any;
	
	constructor(private _http: HttpClient)
	{
		this._backendURL = {};
		
		let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
		if (environment.backend.port) {
		  baseUrl += `:${environment.backend.port}`;
		}
		
		Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
	}
	
	
	
	login (login :Login) : Observable<any>
	{
		return this._http.post<Login>(
			this._backendURL.login, login, this._options()
		);
	}
	
	private _options(headerList: Object = {}): any {
		return { headers: new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList)) };
	}
	

}
