class Chair{
    sitOn(){

    }
}

class Sofa{
    LieOn(){

    }
}
class CoffeeTable{
    putOn(){

    }
}

// Modern Products:

class ModernChair extends Chair{
    sitOn(){
        console.log("Sitting on Modern Chair");
    }
}

class ModernSofa extends Sofa{
    lieOn(){
        console.log("Sitting on Modern Sofa");
    }
}

class ModernCoffeetable extends CoffeeTable{
    putOn(){
        console.log("Sitting on Modern Coffee table");
    }
}

// Victorian Products

class VictorianChair extends Chair{
    sitOn(){
        console.log("Sitting on Victorian Chair");
    }
}

class VictorianSofa extends Sofa{
    lieOn(){
        console.log("Sitting on Victorian Sofa");
    }
}

class VictorianCoffeetable extends CoffeeTable{
    putOn(){
        console.log("Sitting on Victorian Coffee table");
    }
}


//Abstract Interface:

class FurnitureFactory{
    createChair(){

    }

    createSofa(){

    }

    createCoffeeTable(){

    }
}

//Concrete Factory

class ModernFurnitureFactory extends FurnitureFactory{
    createChair(){
        return new ModernChair();
    }

    createSofa(){
        return new ModernSofa();
    }

    createCoffeeTable(){
        return new ModernCoffeetable();
    }
}

class VictorianFurnitureFactory extends FurnitureFactory{
    createChair(){
        return new VictorianChair();
    }

    createSofa(){
        return new VictorianSofa();
    }

    createCoffeeTable(){
        return new VictorianCoffeetable();
    }
}


function furnishHouse(factory){
    const chair = factory.createChair();
    const sofa = factory.createSofa();
    const table = factory.createCoffeeTable();

    chair.sitOn();
    sofa.lieOn();
    table.putOn();
}

let factory;


const style = "modern";

if(style === "modern"){
    factory = new ModernFurnitureFactory();
}
else{
    factory = new VictorianFurnitureFactory();
}

furnishHouse(factory);


