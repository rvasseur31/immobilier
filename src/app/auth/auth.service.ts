import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: User | undefined = undefined;
  public currentUser$: BehaviorSubject<User | undefined> = new BehaviorSubject<
    User | undefined
  >(this.currentUser);

  constructor(private userService: UserService) {}

  getcurrentUser(): User | undefined {
    return this.currentUser;
  }

  login(email: string, password: string): User | undefined {
    const userFound = this.userService.users.filter((user) => {
      return user.email === email && user.password === password;
    });

    const user = userFound[0];

    console.log('User : ', user);
    this.currentUser = user;
    this.currentUser$.next(this.currentUser);
    return user;
  }

  logout() {
    this.currentUser$.next(undefined);
  }

  updateUser(user: User | undefined) {
    this.currentUser = user;
    this.currentUser$.next(this.currentUser);
  }
}
