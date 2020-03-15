import exp = require("constants");

interface IHandle{};
interface IBreak{};
abstract class VehicleAbstractFactory{
    abstract  createHandle(): IHandle
    abstract  createBreak(): IBreak;
}
export class CarFactory extends VehicleAbstractFactory{
    createBreak(): IBreak {
        return new CarBreak();
    }

    createHandle(): IHandle {
        return new CarHandle();
    }

}

export class BikeFactory extends VehicleAbstractFactory{
    createBreak(): IBreak {
        return new BikeBreak()
    }

    createHandle(): IHandle {
        return new BikeHandle();
    }

}

export class CarBreak implements IBreak{

}

export class BikeBreak implements IBreak{

}

export class CarHandle implements IHandle{

}

export class BikeHandle implements IHandle{

}

export class BuildParts{
    private vehicleFactory: VehicleAbstractFactory;
    constructor(vehicleFactory: VehicleAbstractFactory){
        this.vehicleFactory = vehicleFactory;
    }

    getHandle(): IHandle{
        return  this.vehicleFactory.createHandle();
    }

    getBreak(): IBreak{
        return this.vehicleFactory.createBreak();
    }
};
