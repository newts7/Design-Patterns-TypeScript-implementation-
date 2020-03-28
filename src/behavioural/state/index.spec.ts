import {ConcreteStateA, ConcreteStateB, Context} from "./index";
import { expect } from 'chai';
describe('======Running test cases for state patten-----', function () {
    describe('======Running positive test cases for state patten-----', function () {
        it('should change to other state while performing request', function () {
            const context = new Context();
            context.setState(new ConcreteStateA());
            context.handleRequest();
            expect(context.getState()).to.be.instanceOf(ConcreteStateB);
            context.handleRequest();
        });
    });
    describe('======Running negative test cases for state patten-----', function () {

    });
});
