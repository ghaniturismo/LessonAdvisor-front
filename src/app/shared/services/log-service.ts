import { Injectable, OnInit} from '@angular/core';
import {Personne} from '../models/Personne';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class LogService implements OnInit {

  public user: BehaviorSubject<Personne> = new BehaviorSubject(null);


  constructor() {
    this.user.next(new Personne( 'Wilson', 'Nicky', 'niki.wil@gmail.com', '07 25 36 28 24', 'Enseignant', 'Nancy',
      'https://nospensees.fr/wp-content/uploads/2017/02/hombre-enfadado.jpg', ''));
  }

  ngOnInit() {
  }



  getCurrentUser(): BehaviorSubject<Personne> {
    return this.user;
  }

  setCurrentUser(user: Personne): void {
    this.user.next(user);
  }

}
