import {HandlerA, HandlerB} from "./index";
import {expect } from 'chai';
describe('-----Running test cases for chain of responsibility-----', function () {
    describe('-----Running positive test cases for chain of responsibility-----', function () {
        it('should handle request in handler B', function () {
            const handlerA = new HandlerA();
            const handlerB = new HandlerB();
            handlerA.setNext(handlerB);
            const handledInHandler = handlerA.handle(2);
            expect(handledInHandler).to.be.deep.equal('B');
        });
    });
    describe('-----Running negative test cases for chain of responsibility-----', function () {

    });
});
