class Transport{
    deliver(){
        throw "Method not implemented";
    }
}

class Truck extends Transport{
    deliver(){
        console.log("Deliver by land(Truck)")
    }
}

class Ship extends Transport{
    deliver(){
        console.log("Deliver by Sea(Ship)")
    }
}

class Plane extends Transport{
    deliver(){
        console.log("Deliver by Air(Plane)")
    }
}
class Logistics{
    createTransport(){
        throw "Factory method"
    }

    planDelivery(){
        const transport = this.createTransport(); 
        transport.deliver();
    }
}

class RoadLogistics extends Logistics{
    createTransport(){
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    createTransport() {
        return new Ship(); 
    }

}

class AirLogistics extends Logistics{
    createTransport(){
        return new Plane();
    }
}

const roadLogistics = new RoadLogistics();
roadLogistics.planDelivery();

const seaLogistics = new SeaLogistics();
seaLogistics.planDelivery();

const airLogistics = new AirLogistics();
airLogistics.planDelivery();