import TransactionRepository from './transaction-repository';
import Clock from './clock';
import Transaction from './transaction';
import TransactionPrinterService from './transaction-printer';

class AccountService {

  private transactionRepository: TransactionRepository;
  private clock: Clock;
  private transactionPrinter: TransactionPrinterService;

  constructor(
    transactionRepository: TransactionRepository,
    clock: Clock,
    transactionPrinter: TransactionPrinterService
  ) {
    this.transactionRepository = transactionRepository;
    this.clock = clock;
    this.transactionPrinter = transactionPrinter;
  }

  public deposit(amount: number): void {
    this.transactionRepository.add(this.transactionWith(amount));
  }

  public withdraw(amount: number): void {
    this.transactionRepository.add(this.transactionWith(-amount));
  }

  public printStatement(): void {
    const transactions: Transaction[] = this.transactionRepository.all();
    this.transactionPrinter.printStatement(transactions);
  }

  private transactionWith(amount: number): Transaction {
    return new Transaction(this.clock.today(), amount);
  }

}

export default AccountService;
