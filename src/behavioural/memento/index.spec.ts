import {CareTaker, Originator} from "./index";
import {expect} from 'chai';

describe('-----Running test cases for memento------', function () {
    describe('-----Running positive test cases for memento------', function () {
        it('should store all states in mementos', function () {
            const originator = new Originator();
            const careTaker = new CareTaker(originator);
            originator.setState('5');
            careTaker.backup();
            originator.setState('6');
            careTaker.backup();
            expect(careTaker.showHistory()).to.be.deep.equal(['5','6'])
        });

        it('should restore state', function () {
            const originator = new Originator();
            const careTaker = new CareTaker(originator);
            originator.setState('5');
            careTaker.backup();
            originator.setState('6');
            expect(originator.getCurrentState()).to.be.deep.equal('6');
            careTaker.undo();
            expect(originator.getCurrentState()).to.be.deep.equal('5')
        });
    });
    describe('-----Running negative test cases for memento------', function () {

    });
});


