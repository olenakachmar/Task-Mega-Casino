import { Casino } from './Casino';
import { GameMachine } from './GameMachine';
import { User } from './User';

class SuperAdmin extends User {
  constructor(name, money) {
    super(name, money)
  }

  public createNewCasino(casinoName: string): Casino {
    return new Casino(casinoName);
  }

  public createGameMachineInCasino(amountOfMoney): GameMachine {
    if (this.money < amountOfMoney) {
      throw new Error('You do not have enough money')
    }
    this.money -= amountOfMoney;
    return new GameMachine(amountOfMoney)
  }

  public tookMoneyFromCasino(amount: number, casino: Casino): number {
    let temporarySum = 0;
    casino.gameMachines
      .sort((a, b) => b.machineAmount - a.machineAmount)
      .map(e => {
        if (e.machineAmount < amount - temporarySum) {
          temporarySum += e.machineAmount;
          e.machineAmount = 0;
        } else {
          e.machineAmount -= amount - temporarySum;
          return amount;
        }
      });
    throw new Error('Sorry, there is no enough money in the casino')
  }

  public putMoneyIntoCasino(amount: number, casino: Casino, gameMachine: GameMachine) {
    if (gameMachine) {
      casino.gameMachines.find(e => e.id === gameMachine.id).machineAmount += amount;
      return;
    } else {
      casino.amountOfMoneyOnBalance += amount;
      return;
    }
    throw new Error('Please, input Casino or GameMachine')

  }

  public deleteGameMachine(casino: Casino, idOfGameMachine: number) {
    let amountOfMoneyToSpare = 0;
    casino.gameMachines.map(e => {
      if (e.id === idOfGameMachine) {
        amountOfMoneyToSpare = e.machineAmount;
      }
      else {
        return `There is no such id of Game Machine in this Casino`
      }
    });
    casino.gameMachines = casino.gameMachines.filter(elem => elem !== idOfGameMachine).map(elem => {
      elem.machineAmount += amountOfMoneyToSpare / casino.gameMachines.length-1;
    });
  }
}