import {ComponentA, ComponentB, Mediator} from "./index";
import {expect} from 'chai';
import sinon = require("sinon");

describe('-----Running test cases for mediator pattern----', function () {
    describe('-----Running positive test cases for mediator pattern----', function () {
        it('should trigger message receiver in B on notify from  A', function () {
            const componentA = new ComponentA();
            const componentB = new ComponentB();
            const mediator = new Mediator(componentA, componentB);
            const spy  = sinon.spy(componentB,'gotNewMessageB');
            componentA.doA();
            expect(spy.callCount).to.be.deep.equal(1);
        });
    });
    describe('-----Running negative test cases for mediator pattern----', function () {

    });
});
