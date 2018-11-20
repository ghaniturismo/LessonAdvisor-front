import {Injectable, OnInit} from '@angular/core';
import {LessonPlace} from '../../models/lessonPlace';
import { BehaviorSubject } from 'rxjs';
import {Adresse} from '../../models/Adresse';
import {Comment} from '../../models/Comment';
import {Personne} from '../../models/Personne';

@Injectable()
export class OrgService implements OnInit {
  public Orgs: BehaviorSubject<LessonPlace[]> = new BehaviorSubject(null);

  constructor() {
    const user = new Personne('Wilson Nicky', '', 'niki.wil@gmail.com', '07 25 36 28 24', 'Enseignant', 'Nancy', 'https://www.nancy.fr/fileadmin/_processed_/6/2/csm_2016-06-inauguration-creche-familiale_c2d58cb2af.jpg', '');

    this.Orgs.next(
      [
        new LessonPlace('Antoine',
                         '23, site province, Laxou, 54520',
                         'https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641_960_720.jpg',
                         'mathinfo@gmail.com', '06 05 89 32 36', 'http://www.rue89strasbourg.com',
                          new Adresse ('Laxoviennes', 54520, 'vendoeuvres'),
                          'blabla expliquant ce que la personne vas faire dans son cours',
                            0,
                          '09h-12h',
                          '',
                           20,
                           '6', null),

        new LessonPlace('Jess',
          '23, site province, Laxou, 54520',
          'https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641_960_720.jpg',
          'mathinfo@gmail.com', '06 05 89 32 36', 'http://www.rue89strasbourg.com',
          new Adresse ('Laxoviennes', 54520, 'vendoeuvres'),
          'blabla expliquant ce que la personne vas faire dans son cours',
          0,
          '09h-12h',
          '',
          20,
          '6', null),
  ]
  );

     }

  ngOnInit() {
  }

  getListOrg(): BehaviorSubject<LessonPlace[]> {
    return this.Orgs;
  }

  getOrgByIndex(id: number): LessonPlace {
    let o: LessonPlace;
    this.Orgs.subscribe( valeur => {
      o = valeur[id];
    });
    return o;
  }

  createOrg(org: LessonPlace): void {
    this.Orgs.subscribe( valeur => {
      valeur.push(org);
    });

  }

  addComment(comment: Comment, index: number): void {
    this.Orgs.subscribe( valeur => {
      if (valeur[index].comments === null) {
        valeur[index].comments = [];
      }
      valeur[index].comments.push(comment);
    });
  }

}
