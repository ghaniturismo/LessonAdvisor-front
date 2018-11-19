import {Comment} from './Comment';
import {Adresse} from './Adresse';

export class LessonPlace {
  public name: string;
  public adresse: string;
  public img: string;
  public id: string;
  public email: string;
  public phone: string;
  public website: string;
  public address: Adresse;
  public description: string;
  public capacity: number;
  public comments: Comment[];


  constructor(name: string,
              adresse: string,
              img: string,
              email: string,
              phone: string,
              website: string,
              address: Adresse,
              description: string,
              staffNumber: number,
              openingHours: string,
              admissionConditions: string,
              capacity: number,
              ageLimits: string,
              comments: Comment[]) {
    this.name = name;
    this.adresse = adresse;
    this.img = img;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.address = address;
    this.description = description;
    this.capacity = capacity;
    this.comments = comments;
  }

}

