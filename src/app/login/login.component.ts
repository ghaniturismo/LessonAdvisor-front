import {Component, EventEmitter, Input, OnChanges} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Login } from '../../shared/interfaces/login';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnChanges
{

  private readonly _form: FormGroup;
  private _login_data: Login;


  private readonly _submit$: EventEmitter<Login>;

  constructor ()
  {
    this._form = this._buildForm();
  }


  @Input
  set


  ngOnChanges (record)
  {
    if (record.model && record.model.currentValue) {
      //
    }
    else {
      this._login_data = {
        login:'',
        password:''
      };
    }
  }

  @Output('submit')
  get submit$(): EventEmitter<Login> {
    return this._submit$;
  }


  _buildForm (): FormGroup {
    return new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

}
