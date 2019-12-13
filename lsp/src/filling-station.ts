import Vehicle from './vehicle';

class FillingStation {
  public refuel(vehicle: Vehicle): void {
    vehicle.fill();
  }

  public charge(vehicle: Vehicle): void {
    vehicle.fill();
  }
}

export default FillingStation;
