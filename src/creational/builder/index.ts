export interface Bike{
    wheels?: boolean
    break?: boolean
    Gear?: boolean
}

interface IBikeBuilder {
    addWheels(): BikeBuilder
    addBreaks(): BikeBuilder
    addGear(): BikeBuilder
}

export class BikeDirector{

    makeProductionReadyBike(): Bike{
        const bikeBuilder = new BikeBuilder();
        return bikeBuilder.addWheels().addGear().addBreaks().build();
    }
    makeBikeWithWheels(): Bike{
        const bikeBuilder = new BikeBuilder();
        return bikeBuilder.addWheels().build();
    }
}

export class BikeBuilder implements IBikeBuilder{
    private readonly bike: Bike;
    constructor(){
        this.bike ={};
    }
    addWheels():BikeBuilder{
        this.bike.wheels = true;
        return this;
    }
    addBreaks(): BikeBuilder{
        this.bike.break = true;
        return this;
    }

    addGear(): BikeBuilder{
        this.bike.Gear = true;
        return this;
    }

    build(): Bike{
        return  this.bike;
    }
}
