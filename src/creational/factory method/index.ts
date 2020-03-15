abstract class VehicleCreator{
    abstract createVehicle(): IVehicle
}

export class CarCreator extends VehicleCreator{
    createVehicle(): IVehicle {
        return new Car();
    }
}

export class BikeCreator extends VehicleCreator{
    createVehicle(): IVehicle {
        return new Bike();
    }
}

interface IVehicle {}

export class Car implements IVehicle{

};
export class Bike implements IVehicle{

};

export const getVehicle = (vehicleCreator: VehicleCreator) => {
    return vehicleCreator.createVehicle();
};
