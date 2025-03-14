import { Person } from "./Person-class";

export class BankAccount {
  private holder: Person; // composition
  protected _balance: number; // saldo
  private accountNumber: string; // número da conta

  constructor(person: Person, initialBalance: number, accountNumber: string) {
    (this.holder = person),
      (this._balance = initialBalance),
      (this.accountNumber = accountNumber);
  }

  // depositar
  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this._balance}`);
    } else {
      console.log("Deposit amount must be positive.\n");
    }
  }

  // sacar
  withdraw(amount: number): void {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      this.logSuccessWithDraw(amount);
    } else {
      this.logInvalidWithDraw();
    }
  }

  protected logSuccessWithDraw(amount: number) {
    console.log(`Withdrawn: ${amount}. New balance: ${this._balance}\n`);
  }

  protected logInvalidWithDraw() {
    console.log("Invalid withdrawal amount or insufficient founds.\n");
  }

  get balance(): number {
    return this._balance;
  }

  get accountDetails(): string {
    return `Account Number: ${this.accountNumber}\nAccount Holder: ${this.holder.fullName}\nBalance: ${this._balance}\n`;
  }
}
