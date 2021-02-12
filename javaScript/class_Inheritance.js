
class Vehicle {
    constructor(model){
        this.model = model;
    }

    display(){
        console.log(this.model);
        return this.model;
    }
}

class SUV extends Vehicle{

    constructor(make,model){
        super(model)
        this.make = make
    }
    display(){
        console.log(this.make);
        return this.make;
    }

}

vehicleObj = new Vehicle("Honda");
vehicleObj.display();

suvObj = new SUV("2017","Honda");
suvObj.display1();