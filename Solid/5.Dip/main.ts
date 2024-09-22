/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

interface IEmailService {
  sendEmail(message: string): void;
}

export class EmailService implements IEmailService {
  sendEmail(message: string): void {
    console.log(`Sending email with message: ${message}`);
  }
}

export class SendNotification {
  private _emailService: IEmailService;

  constructor() {
    this._emailService = new EmailService();
  }

  sendNotification(message: string): void {
    this._emailService.sendEmail(message);
  }
}
