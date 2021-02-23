import { IUser } from './user.interface';

export class User implements IUser {
    id: number;
    email: string;
    password: string;
    money: number;

    constructor(id: number, email: string, password: string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.money = 4000
    }

    addMoney(moneyToAdd: number): void {
        this.money += moneyToAdd;
    }
}