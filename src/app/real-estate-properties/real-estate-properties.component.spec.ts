import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstatePropertiesComponent } from './real-estate-properties.component';

describe('RealEstatePropertiesComponent', () => {
  let component: RealEstatePropertiesComponent;
  let fixture: ComponentFixture<RealEstatePropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstatePropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstatePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
