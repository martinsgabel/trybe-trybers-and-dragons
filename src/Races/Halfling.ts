import Race from './Race';

export default class Halfling extends Race {
  private static _instancesHalfling = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instancesHalfling += 1;
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    return Halfling._instancesHalfling;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}