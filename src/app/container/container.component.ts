import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css', '../styles/default_background.css']
})
export class ContainerComponent implements OnInit
{

	constructor(private router: Router, private activatedRoute: ActivatedRoute)
	{}
	
	ngOnInit()
	{}

}
