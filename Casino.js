import { GameMachine } from './GameMachine';

export class Casino {
  public gameMachines: Array<GameMachine>;
  public amountOfMoneyOnBalance: number;

  constructor(name) {
    this.name = name;
  }

  public getMoney(): string {
    return `this casino has ${this.amountOfMoneyOnBalance} amount of money on balance`;
  }

  public getMachineCount(): string {
    return `this casino has ${this.gameMachines.length} GameMachines`
  }
}