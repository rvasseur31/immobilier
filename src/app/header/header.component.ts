import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  private authSubcription: Subscription

  currentUser: User | undefined;

  email = "";
  password = "";

  constructor(private authService: AuthService) {
    this.authSubcription = this.authService.currentUser$.subscribe(
      (user) => this.currentUser = user,
      (error) => {},
      () => {}
    );
  }

  login(): void {
    this.authService.login(this.email, this.password);
  }

  logout(): void {
    this.authService.logout()
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.authSubcription) {
      this.authSubcription.unsubscribe();
    }
  }
}
