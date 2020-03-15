import {Bike, BikeCreator, Car, CarCreator, getVehicle} from "./index";
import {expect} from 'chai';

describe('-----Running test cases for factory method', function () {
    describe('-----Running positive test cases for factory method', function () {
    // in both cases only creator should change in client code
        it('should create bike as concrete product if bike creator is used', function () {
                    const vehicle = getVehicle(new CarCreator());
                    expect(vehicle).to.be.instanceOf(Car);
        });

        it('should create car as concrete product if car creator is used', function () {
            const vehicle = getVehicle(new BikeCreator());
            expect(vehicle).to.be.instanceOf(Bike);
        });

    });
    describe('-----Running negative test cases for factory method', function () {

    });
});
