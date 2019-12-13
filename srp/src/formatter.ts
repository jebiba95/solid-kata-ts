class Formatter {

  public formatDate(date: Date): string {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  public formatNumber(amount: number): string {
    return amount.toFixed(2);
  }

}

export default Formatter;
