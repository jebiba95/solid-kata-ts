import { Employee } from './employee';

class Engineer implements Employee {
  salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }

  public payAmount(): number {
    return this.salary;
  }
}

export default Engineer;
