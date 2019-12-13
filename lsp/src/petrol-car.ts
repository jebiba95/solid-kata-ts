import Vehicle from './vehicle';

class PetrolCar extends Vehicle {
  private FUEL_TANK_FULL: number = 100;
  private fuelTankLevel: number = 0;

  public fill(): void {
    this.fuelTankLevel = this.FUEL_TANK_FULL;
  }

  public getEnergyLevel(): number {
    return this.fuelTankLevel;
  }
}

export default PetrolCar;
