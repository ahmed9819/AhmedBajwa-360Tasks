// Subject Class
class WeatherStation{
    
    constructor(){
        this.observers = [];
        this.temperature = 0;
    }

    subscribe(observer){
        this.observers.push(observer);
    }

    unsubscribe(observer){
        this.observers = this.observers.filter(o => o !== observer);


    }

    notify(){
        for (let observer of this.observers) {
        observer.update(this.temperature);
        }


    }

    setTemperature(temp){
        this.temperature = temp;
        this.notify();
    }

}

//Observers
class MobileDisplay{
    update(temp){
        console.log("Mobile display temperature: ", temp);
    }
}

class WebDisplay {
  update(temp) {
    console.log("Web display temperature:", temp);
  }
}


//client code
const weatherStation = new WeatherStation();

const mobile = new MobileDisplay();
const web = new WebDisplay();

weatherStation.subscribe(mobile);
weatherStation.subscribe(web);

weatherStation.setTemperature(30);
weatherStation.setTemperature(35);
