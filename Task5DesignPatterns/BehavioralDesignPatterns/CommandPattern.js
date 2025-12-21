class Light {
  on() {
    console.log("Light ON");
  }
  off() {
    console.log("Light OFF");
  }
}

class LightOnCommand {
  constructor(light) {
    this.light = light;
  }
  execute() {
    this.light.on();
  }
}

class RemoteControl {
  press(command) {
    command.execute();
  }
}


const light = new Light();
const lightOn = new LightOnCommand(light);

const remote = new RemoteControl();
remote.press(lightOn);
