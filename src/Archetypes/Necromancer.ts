import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _instancesNecromancer = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer._instancesNecromancer += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instancesNecromancer;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}