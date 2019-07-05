export class GameMachine {
  public id: number;

  constructor(amount) {
    this.machineAmount = amount;
  }

  public getMoney(): string {
    return `a GameMachine has ${this.machineAmount} amount of money`;
  }

  public takeMoneyFromMachine(amount: number): number {
    this.machineAmount = this.machineAmount - amount;
    return amount;
  }

  public putInMoney(amount: number): number {
    this.machineAmount = this.machineAmount + amount;
    return amount;
  }

  public makeBet(amount: number): number {
    let wonPrice = 0;
    this.machineAmount = this.machineAmount + amount;
    const random = this.randomNumbers();
    let count = 0;
    for (let i = 0; i < random.length; i++) {
      for (let j = i + 1; j < random.length; j++) {
        if (random[i] === random[j]) {
          count++
        }
      }
    }

    if (count === 0) {
      wonPrice = 0;
    }
    if (count === 1) {
      wonPrice = amount * 2;
      this.machineAmount = this.machineAmount - wonPrice;
    }
    if (count === 2) {
      wonPrice = amount * 3;
      this.machineAmount = this.machineAmount - wonPrice;
    }

    return wonPrice;
  }

  private randomNumbers(): number {
    let min = 100;
    let max = 999;
    return Math.floor(Math.random() * (max - min) + min).toString();
  }
}

