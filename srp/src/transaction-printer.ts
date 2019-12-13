import Console from './console';
import Transaction from './transaction';
import Formatter from './formatter';

class TransactionPrinterService {
  private STATEMENT_HEADER: string = 'DATE | AMOUNT | BALANCE';

  private console: Console;
  private formatter: Formatter;

  constructor(
    console: Console,
    formatter: Formatter
  ) {
    this.console = console;
    this.formatter = formatter;
  }

  public printStatement(transactions: Transaction[]): void {
    this.printHeader();
    this.printTransactions(transactions);
  }

  private printHeader() {
    this.printLine(this.STATEMENT_HEADER);
  }

  private printTransactions(transactions: Transaction[]) {
    let balance = 0;

    transactions
      .map(transaction => {
        balance += transaction.getAmount();
        return this.statementLine(transaction, balance);
      })
      .forEach(statement => this.printLine(statement));
  }

  private statementLine(transaction: Transaction, balance: number): string {
    const formattedDate = this.formatter.formatDate(transaction.getDate());
    const formattedAmmount = this.formatter.formatNumber(transaction.getAmount());
    const formattedBalance = this.formatter.formatNumber(balance);

    return `${formattedDate} | ${formattedAmmount} | ${formattedBalance}`;
  }

  private printLine(line: string) {
    this.console.printLine(line);
  }
}

export default TransactionPrinterService;
