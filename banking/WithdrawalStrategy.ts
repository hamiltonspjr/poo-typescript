export interface WithdrawlStrategy {
  canWithdraw(balance: number, amount: number): boolean;
  executeWithdrawal(balance: number, amount: number): number;
}

// Modelo de Saque Padrão
export class StandardWithdrawal implements WithdrawlStrategy {
  canWithdraw(balance: number, amount: number): boolean {
    return amount > 0 && amount <= balance;
  }

  executeWithdrawal(balance: number, amount: number): number {
    return balance - amount;
  }
}

// Modelo de Saque com Limite
export class OverdraftWithdrawal implements WithdrawlStrategy {
  private overdraftLimit: number;

  constructor(overdraftLimit: number) {
    this.overdraftLimit = overdraftLimit;
  }

  canWithdraw(balance: number, amount: number): boolean {
    return amount > 0 && amount <= balance + this.overdraftLimit;
  }

  executeWithdrawal(balance: number, amount: number): number {
    return balance - amount;
  }
}
