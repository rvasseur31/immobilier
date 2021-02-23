import { Component, Input, OnInit } from '@angular/core';
import { RealEstate } from './real-estate.model';
import { RealEstateService } from './real-estate.service';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.scss']
})
export class RealEstateComponent implements OnInit {

  @Input() realEstate: RealEstate | undefined

  constructor(private realEstateService: RealEstateService) { }

  sellRealEstate(realEstateId: number) {
    this.realEstateService.removeRealEstate(realEstateId)
  }

  ngOnInit(): void {
  }

}
