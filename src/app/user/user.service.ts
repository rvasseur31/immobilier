import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users = [
    new User(4, 'raphael.vasseur@ynov.com', 'Passw0rd'),
    new User(2, 'admin@ynov.com', 'admin'),
    new User(3, 'antoine.roques@ynov.com', 'antoine'),
    new User(1, 't', 't')
  ]

  constructor() {

  }
}
