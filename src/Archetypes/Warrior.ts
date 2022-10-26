import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _instancesWarrior = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._instancesWarrior += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior._instancesWarrior;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}