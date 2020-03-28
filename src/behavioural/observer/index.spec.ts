import {ConcreteObserverA, ConcreteObserverB, Subject} from "./index";
import sinon = require("sinon");
import {expect } from 'chai';
describe('-----Running test cases for observer pattern', function () {
    describe('-----Running positive test cases for observer pattern', function () {
        it('should notify all observers', function () {
            const subject = new Subject();
            let observerA = new ConcreteObserverA();
            let observerB = new ConcreteObserverB();
            let spy1 =  sinon.spy(observerA,'update');
            let spy2 = sinon.spy(observerB,'update');
            subject.attach(observerA);
            subject.attach(observerB);
            subject.notify();
            expect(spy1.callCount).to.be.deep.equal(1);
            expect(spy2.callCount).to.be.deep.equal(1);
        });

        it('should attach and detach an observer', function () {
            const subject = new Subject();
            let observer = new ConcreteObserverA();
            subject.attach(observer);
            expect(subject.getObservers().length).to.be.equal(1);
            subject.detach(observer);
            expect(subject.getObservers().length).to.be.equal(0);
        });
    });
    describe('-----Running negative test cases for observer pattern', function () {

    });
});
