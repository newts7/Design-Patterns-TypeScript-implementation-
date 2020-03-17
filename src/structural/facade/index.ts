export class Bike{
    private readonly speed: number;
    constructor(speed: number){
        this.speed = speed;
    }
    getSpeed(): number{
        return this.speed;
    }
}

export class Car{
    private readonly speed: number;
    constructor(speed: number){
        this.speed = speed;
    }
    getSpeed(): number{
        return this.speed;
    }
}

export class Facade{
    private bike: Bike;
    private  car: Car;
    constructor(bike: Bike, car: Car){
     this.bike = bike;
     this.car = car;
    }
    getTotalSpeed(): number{
        return this.car.getSpeed()+this.bike.getSpeed();
    }
}
