class LoggedOutState {
  handle() {
    console.log("User is logged out");
  }
}

class LoggedInState {
  handle() {
    console.log("User is logged in");
  }
}

class UserContext {
  constructor() {
    this.state = new LoggedOutState();
  }

  setState(state) {
    this.state = state;
  }

  request() {
    this.state.handle();
  }
}

// Usage
const user = new UserContext();
user.request();

user.setState(new LoggedInState());
user.request();
