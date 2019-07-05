import { GameMachine } from "./GameMachine";

export class User {
  constructor(name, money) {
    this.name = name;
    this.money = money;
  }

  public play(bet: number, gameMachine: GameMachine): void {
    this.money -= bet;
    this.money += gameMachine.makeBet(bet);
  }

}
