import {BikeBreak, BikeFactory, BikeHandle, BuildParts, CarBreak, CarFactory, CarHandle} from "./index";
import {expect} from 'chai';

describe('-----Running test cases for abstract factory-----', function () {
    describe('-----Running positive test cases for abstract factory-----', function () {
        it('should create parts of car', function () {
            const builder = new BuildParts(new CarFactory());
            expect(builder.getHandle()).to.be.instanceOf(CarHandle);
            expect(builder.getBreak()).to.be.instanceOf(CarBreak);
        });

        it('should create parts of bike', function () {
            const builder = new BuildParts(new BikeFactory());
            expect(builder.getHandle()).to.be.instanceOf(BikeHandle);
            expect(builder.getBreak()).to.be.instanceOf(BikeBreak);
        });
    });
    describe('-----Running negative test cases for abstract factory-----', function () {

    });
});
