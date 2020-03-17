import {expect} from 'chai';
import {Bike, Car, Facade} from "./index";

describe('------Running test cases for facade pattern-----', function () {
    describe('------Running positive test cases for facade pattern-----', function () {
        it('should return bike speed as well as car\'s speed', function () {
            //hiding the bike and car system using facade
            let carSpeed = 5;
            let bikeSpeed = 10;
            expect(carSpeed+bikeSpeed).to.be.deep.equal((new Facade(new Bike(bikeSpeed), new Car(carSpeed))).getTotalSpeed())
        });
    });
    describe('------Running negative test cases for facade pattern-----', function () {

    });

});
