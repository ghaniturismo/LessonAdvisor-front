import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup,Validators} from '@angular/forms';

import {Personne} from '../shared/models/Personne';
import {LogService} from '../shared/services/log-service/log-service.component';


@Component({
	selector: 'app-person-form',
	templateUrl: './user_profil.component.html',
	styleUrls: ['./user_profil.component.css', '../styles/default_background.css', '../styles/nav.css', '../styles/user_button.css'
	]
})
export class User_profilComponent implements OnInit
{

  public mode: number;
  public user: Personne;
  public formCreate: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private logService: LogService) {
    this.mode = this.activatedRoute.snapshot.params.mode;
    if (this.mode == 2) {
      this.logService.getCurrentUser().subscribe( (value: Personne) => {
        this.user = value;
      });
    } else {
      this.user = new Personne('', '', '', '', '', '', '', '');
    }
  }

  ngOnInit() {
    this.formCreate = new FormGroup( {
      nom: new FormControl('', Validators.required),
      ville: new FormControl('', Validators.required),
      tel: new FormControl(''),
      email: new FormControl('', Validators.required),
      pwd: new FormControl('', Validators.required),
      img: new FormControl('')
   } );
  }

  allerHome(): void {
    this.router.navigate(['home']);
  }
  allerProfil(): void {
    this.router.navigate(['profil', 2]);
  }
  allerOrg(): void {
    this.router.navigate(['addlesson']);
  }


	create (): void
	{
		if (
			this.mode == 1 && this.formCreate.valid
		&&	this.formCreate.get('pwd').value === this.formCreate.get('pwd2').value
		&&	this.formCreate.get('email').value === this.formCreate.get('email2').value
		)
		{
			this.user.nom = this.formCreate.get('nom').value;
			this.user.ville = this.formCreate.get('ville').value;
			this.user.tel = this.formCreate.get('tel').value;
			this.user.email = this.formCreate.get('email').value;
			this.user.passWord = this.formCreate.get('pwd').value;
			this.user.img = this.formCreate.get('img').value;
			this.mode = 2;
			
			this.logService.setCurrentUser(this.user);
			console.log(this.user.nom);
		}
	}
	
	
	editer () : void
	{
		this.mode = 1;
	}

}
