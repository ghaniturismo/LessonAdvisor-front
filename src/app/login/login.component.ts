import {Component, EventEmitter, OnChanges, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Login } from '../../shared/interfaces/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnChanges
{

  private readonly _form: FormGroup;
  private readonly _submit$: EventEmitter<Login>;

  private _login_data: Login;


  constructor ()
  {
    this._submit$ = new EventEmitter<Login>();
    this._form = this._buildForm();
  }



  get form(): FormGroup {
    return this._form;
  }

  @Output('submit')
  get submit$(): EventEmitter<Login> {
    return this._submit$;
  }

  get login(): Login {
    return this._login_data;
  }



  ngOnChanges (record)
  {
    if (record.model && record.model.currentValue) {
      //this._form.patchValue(this._login_data);
    }
    else {
      this._login_data = {
        login:'',
        password:''
      };
    }
  }

  submit(login: Login) {
    this._submit$.emit(login);
  }



  _buildForm (): FormGroup {
    return new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

}
