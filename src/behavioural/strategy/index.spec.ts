import {ConcreteClass, ConcreteStrategyA, ConcreteStrategyB} from "./index";
import {expect} from 'chai';
describe('Running test cases for strategy pattern', function () {
    describe('Running positive test cases for strategy pattern', function () {
        it('should return reverse of string if class used with different strategy', function () {
            let value = 'abcde';
            const concreteClass = new ConcreteClass();
            concreteClass.setStrategy(new ConcreteStrategyA());
            const resultFromStrategyA  =concreteClass.doAlgorithm(value);
            concreteClass.setStrategy(new ConcreteStrategyB());
            const resultFromStrategyB = concreteClass.doAlgorithm(value);
            expect(resultFromStrategyA).to.be.deep.equal(resultFromStrategyB.split('').reverse().join(''));
        });
    });
    describe('Running negative test cases for strategy pattern', function () {

    });
});
