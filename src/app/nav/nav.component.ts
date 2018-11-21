import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../styles/nav.css']
})
export class NavComponent implements OnInit
{

	
	constructor(private router: Router, private activatedRoute: ActivatedRoute) 
	{}
	
	ngOnInit()
	{}


	allerHome(): void {
		this.router.navigate(['home']);
	}
	allerProfil(): void {
		this.router.navigate(['profil', 2]);
	}
	allerOrg(): void {
		this.router.navigate(['org']);
	}
	

}
