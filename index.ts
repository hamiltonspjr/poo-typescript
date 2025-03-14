import { BankAccount } from "./banking/BankAccount";
import { CompositionBankAccount } from "./banking/CompositionBankAccount";
import { CreditCard } from "./banking/CreditCard";
import { CurrentAccount } from "./banking/CurrentAccount";
import { Person } from "./banking/Person-class";
import { ProcessPayment } from "./banking/ProcessPayment";
import { SavingsAccount } from "./banking/SavingsAccount";
import {
  OverdraftWithdrawal,
  StandardWithdrawal,
} from "./banking/WithdrawalStrategy";

function main() {
  const maria = new Person("Maria", "da Silva", new Date("1999-01-15"));
  // const mariaSavingsAccount = new SavingsAccount(maria, 100, "123", 2);
  // mariaSavingsAccount.addInterest();

  // const mariaSavingsAccount = new CompositionBankAccount(
  //   maria,
  //   100,
  //   "123",
  //   new StandardWithdrawal()
  // );

  const mariaCurrentAccount = new CurrentAccount(maria, 100, "123", 2);

  const lucas = new Person("Lucas", "Garcez", new Date("1996-02-16"));

  // const lucasCurrentAccount = new CurrentAccount(lucas, 100, "11111", 100);

  // const lucasCurrentAccount = new CompositionBankAccount(
  //   lucas,
  //   100,
  //   "11111",
  //   new OverdraftWithdrawal(100)
  // );

  const lucasCreditCard = new CreditCard("555 555", 200);

  /**
   * @param sender envia
   * @param receiver recebe
   * @param amount valor
   */

  // function transaction(
  //   sender: BankAccount,
  //   receiver: BankAccount,
  //   amount: number
  // ) {
  //   if (amount > 0 && amount <= sender.balance) {
  //     sender.withdraw(amount);
  //     receiver.deposit(amount);
  //     console.log("Transaction successfull");
  //   } else {
  //     console.log("Transaction failed: insufficient funds or invalid amount.");
  //   }
  // }

  // transaction(lucasCurrentAccount, mariaSavingsAccount, 50);

  // function transaction(
  //   sender: CompositionBankAccount,
  //   receiver: CompositionBankAccount,
  //   amount: number
  // ) {
  //   try {
  //     sender.withdraw(amount);
  //     receiver.deposit(amount);
  //     console.log("Transaction successfull");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // transaction(lucasCurrentAccount, mariaSavingsAccount, 200);

  const payment = new ProcessPayment(lucasCreditCard, 100);
  payment.execute();
}

main();
