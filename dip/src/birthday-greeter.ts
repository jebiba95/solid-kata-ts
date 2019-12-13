import EmployeeRepository from './employee-repository';
import Clock from './clock';
import MonthDay from './month-day';
import Employee from './employee';
import Email from './email';
import EmailSender from './email-sender';
import { Sender } from './sender';

class BirthdayGreeter {
  private employeeRepository: EmployeeRepository;
  private clock: Clock;
  private sender: Sender;

  constructor(employeeRepository: EmployeeRepository, clock: Clock, sender: Sender) {
    this.employeeRepository = employeeRepository;
    this.clock = clock;
    this.sender = sender;
  }

  public sendGreetings(): void {
    const today: MonthDay = this.clock.monthDay();
    this.employeeRepository
      .findEmployeesBornOn(today)
      .map(employee => this.emailFor(employee))
      .forEach(email => this.sender.send(email));
  }

  private emailFor(employee: Employee): Email {
    const message: string = `Happy birthday, dear ${employee.getFirstName()}!`;
    return new Email(employee.getEmail(), 'Happy birthday!', message);
  }
}

export default BirthdayGreeter;
