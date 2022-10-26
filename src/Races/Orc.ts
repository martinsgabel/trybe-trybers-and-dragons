import Race from './Race';

export default class Orc extends Race {
  private static _instancesOrc = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._instancesOrc += 1;
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    return Orc._instancesOrc;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}