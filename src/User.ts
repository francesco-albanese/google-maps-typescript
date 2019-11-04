import { Mappable } from './CustomMap';
import faker from 'faker';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +(faker.address.latitude()),
      lng: +(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}