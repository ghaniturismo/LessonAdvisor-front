import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../styles/nav.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

	ngOnInit()
	{}


	allerHome(): void {
		this.router.navigate(['home']);
	}
	allerProfil(): void {
		this.router.navigate(['profil', 2]);
	}
	allerOrg(): void {
		this.router.navigate(['addlesson']);
	}
	

}
