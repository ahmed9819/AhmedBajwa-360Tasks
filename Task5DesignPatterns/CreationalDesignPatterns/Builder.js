class House{
    
    constructor(){
        this.walls = null;
        this.door = null;
        this.windows = null;
        this.roof = null;
        this.garage = null;
        this.garden = null;
    }

}

class Builder{

    buildWalls(){

    }

    buildDoors(){

    }

    buildWindows(){

    }

    buildRoof(){

    }

    buildGarage(){

    }

    buildGarden(){

    }

}

class SimpleHouseBuilder{

    constructor(){
        this.house = new House();
    }

    buildWalls(){
        this.house.walls = "Brick Walls";
    }

    buildDoors(){
        this.house.door = "Wooden Doors";
    }

    buildWindows(){
        this.house.windows = "2 Glass Windows";
    }

    buildRoof(){
        this.house.roof = "Concrete Roof";
    }


    getResult(){
        return this.house;
    }

}

class LuxuryHouseBuilder{

    constructor(){
        this.house = new House();
    }

    buildWalls(){
        this.house.walls = "Marble Walls";
    }

    buildDoors(){
        this.house.door = "Automatic Doors";
    }

    buildWindows(){
        this.house.windows = "6 Large Glass Windows";
    }

    buildRoof(){
        this.house.roof = "Designer Roof";
    }

    buildGarage(){
        this.house.garage = "2 Car Garage";
    }

    buildGarden(){
        this.house.garden = "Beautiful Gardens";
    }

    getResult(){
        return this.house;
    }

}

class HouseDirector{

    buildSimpleHouse(builder){

        builder.buildwalls();
        builder.buildDoors();
        builder.buildWindows();
        builder.buildRoof();
    
    }

    buildLuxuryHouse(builder){

        builder.buildwalls();
        builder.buildDoors();
        builder.buildWindows();
        builder.buildRoof();
        builder.buildGarage();
        builder.buildGarden();

    }

}

const director = new HouseDirector();


const simpleBuilder = new SimpleHouseBuilder();
director.buildSimpleHouse(simpleBuilder);
const simpleHouse = simpleBuilder.getResult();
console.log("Simple House: ", simpleHouse);

const luxuryBuilder = new LuxuryHouseBuilder();
director.buildLuxuryHouse(luxuryBuilder);
const luxuryHouse = luxuryBuilder.getResult();
console.log("Luxury House: ", luxuryHouse);
