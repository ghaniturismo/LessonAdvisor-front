import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{

	
	constructor(private router: Router, private activatedRoute: ActivatedRoute)
	{}
	
	ngOnInit()
	{}
	
	
	redirigerList () : void {
		this.router.navigate(['lessonadvisor/list']);
	}
	
	allerOrg () : void {
		this.router.navigate(['addlesson']);
	}
}
