import { SendNotification } from '../../Solid/5.Dip/main';

describe('Send Notification', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should send an email notification', () => {
    const notification = new SendNotification();
    notification.sendNotification('Hello, this is a notification!');

    expect(consoleSpy).toHaveBeenCalledWith(
      'Sending email with message: Hello, this is a notification!'
    );
  });
});
