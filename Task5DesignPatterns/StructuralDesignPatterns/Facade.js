class AuthService {
  login() {
    console.log("User logged in");
  }
}

class PaymentService {
  pay() {
    console.log("Payment successful");
  }
}

class NotificationService {
  send() {
    console.log("Notification sent");
  }
}


class OrderFacade {
  placeOrder() {
    const auth = new AuthService();
    const payment = new PaymentService();
    const notification = new NotificationService();

    auth.login();
    payment.pay();
    notification.send();
  }
}


const order = new OrderFacade();
order.placeOrder();
