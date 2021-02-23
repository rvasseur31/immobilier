import { IRealEstate } from './real-estate.interface';

export class RealEstate implements IRealEstate {
  id: number;
  name: string;
  address: string;
  price: number;
  owner: number;

  constructor(id: number, name: string, address: string, price: number, owner: number) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.price = price;
    this.owner = owner;
  }
}
