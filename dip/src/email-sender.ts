import Email from './email';
import { Sender } from './sender';

class EmailSender implements Sender {
  public send(email: Email) {
    console.log(
      `To: ${email.getTo()}, Subject: ${email.getSubject()}, Message: ${email.getMessage()}`
    );
  }
}

export default EmailSender;
