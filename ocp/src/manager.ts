import { Employee } from './employee';

class Manager implements Employee {
  salary: number;
  bonus: number;

  constructor(salary: number, bonus: number) {
    this.salary = salary;
    this.bonus = bonus;
  }

  public payAmount(): number {
    return this.salary + this.bonus;
  }
}

export default Manager;
