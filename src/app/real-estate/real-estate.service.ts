import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RealEstate } from './real-estate.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {

  private realEstateProperties = [
    new RealEstate(1, 'La maison du soleil', '30 rue du soleil d\'or', 400000, 1),
    new RealEstate(2, 'La maison de la lune', '23 rue de la lune', 230000, 1),
    new RealEstate(3, 'La maison du brouillard', '87 rue du brouillard', 870000, 1),
    new RealEstate(4, 'La maison du vent', '92 rue du vent', 920000, 2),
    new RealEstate(5, 'La maison du feu', '56 rue du feu', 5600000, 2),
    new RealEstate(6, 'La maison de l\'eau', '64 rue de l\'eau', 6497710, 3),
    new RealEstate(7, 'La maison de la terre', '90 rue de la terre', 9067810, 3),
  ]
  public realEstateProperties$: BehaviorSubject<RealEstate[]> = new BehaviorSubject<RealEstate[]>(this.realEstateProperties);

  constructor(private authService: AuthService) {

  }

  getRealEstateOfCurrentUser(userId: number | undefined): RealEstate[] {
    if (userId) {
      return this.realEstateProperties.filter(realEstate => userId === realEstate.owner)
    }
    return [];
  }

  removeRealEstate(realEstateId: number) {
    const realEstateToRemove = this.realEstateProperties.findIndex(realEstate => realEstate.id === realEstateId)
    const currentUser = this.authService.getcurrentUser();
    currentUser?.addMoney(this.realEstateProperties[realEstateToRemove].price);
    this.authService.updateUser(currentUser);
    this.realEstateProperties.splice(realEstateToRemove, 1);
    this.realEstateProperties$.next(this.realEstateProperties);
  }

}
