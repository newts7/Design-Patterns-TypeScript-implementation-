import {Bike, BikeDirector} from "./index";
import { expect} from 'chai';

describe('-----Running test cases for builder pattern-----', function () {
    describe('-----Running positive test cases for builder pattern-----', function () {
        it('should make production ready bike', function () {
                const bikeDirector = new BikeDirector();
                const bike: Bike = bikeDirector.makeProductionReadyBike();
                let tempBike: Bike = {
                    wheels: true,
                    break: true,
                    Gear: true
                };
                expect(bike).to.be.deep.equal(tempBike);
        });

        it('should bike should just have wheels', function () {
            const bikeDirector = new BikeDirector();
            const bike: Bike = bikeDirector.makeBikeWithWheels();
            let tempBike: Bike = {
                wheels: true,
                break: false,
            };
            expect(bike.wheels).to.be.deep.equal(tempBike.wheels);
        });
    });
    describe('-----Running negative test cases for builder pattern-----', function () {

    });
});
