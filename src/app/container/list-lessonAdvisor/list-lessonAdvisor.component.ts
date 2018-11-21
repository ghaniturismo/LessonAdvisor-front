import { Component, OnInit } from '@angular/core';
import {LessonPlace} from '../../shared/models/lessonPlace';
import {ActivatedRoute, Router} from '@angular/router';
import {OrgService} from '../../shared/services/org-service';

@Component({
  selector: 'app-list-garderie',
  templateUrl: './list-lessonAdvisor.component.html',
  styleUrls: ['./list-lessonAdvisor.component.css']
})
export class ListLessonAdvisorComponent implements OnInit {
  Orgs: LessonPlace[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private orgService: OrgService) {
  }

  ngOnInit() {
    this.orgService.getListOrg().subscribe( valeur => {
       this.Orgs = valeur;
    });

  }

  redirigerDetail(index: number): void {
    this.router.navigate(['lessonadvisor/detail', index]);
  }


}
