import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { RealEstate } from '../real-estate/real-estate.model';
import { RealEstateService } from '../real-estate/real-estate.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnDestroy {
  private authSubcription: Subscription;
  private realEstateSubcription: Subscription;

  currentUser: User | undefined;

  realEstateProperties: RealEstate[] = [];

  constructor(
    private authService: AuthService,
    private realEstateService: RealEstateService
  ) {
    this.authSubcription = this.authService.currentUser$.subscribe(
      (user) => {
        this.realEstateProperties = this.realEstateService.getRealEstateOfCurrentUser(
          user?.id
        );
        return (this.currentUser = user);
      },
      (error) => {},
      () => {}
    );
    this.realEstateSubcription = this.realEstateService.realEstateProperties$.subscribe(
      (realEstate) =>
        (this.realEstateProperties = this.realEstateService.getRealEstateOfCurrentUser(
          this.currentUser?.id
        )),
      (error) => {},
      () => {}
    );
  }
  ngOnDestroy(): void {
    if (this.authSubcription) {
      this.authSubcription.unsubscribe();
    }
    if (this.realEstateSubcription) {
      this.realEstateSubcription.unsubscribe();
    }
  }
}
