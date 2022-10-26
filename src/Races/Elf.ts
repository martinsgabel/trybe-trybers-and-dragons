import Race from './Race';

export default class Elf extends Race {
  private static _instancesElf = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instancesElf += 1;
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    return Elf._instancesElf;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}