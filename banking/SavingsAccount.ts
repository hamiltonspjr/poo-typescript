import { BankAccount } from "./BankAccount";
import { Person } from "./Person-class";

export class SavingsAccount extends BankAccount {
  private interestRate: number;
  constructor(
    person: Person,
    initialBalance: number,
    accountNumber: string,
    interestRate: number
  ) {
    super(person, initialBalance, accountNumber);
    this.interestRate = interestRate;
  }

  addInterest(): void {
    const interest = this.balance * (this.interestRate / 100);
    this.deposit(interest);
    console.log(`Interest added: ${interest}. New Balance: ${this.balance}`);
  }
}
