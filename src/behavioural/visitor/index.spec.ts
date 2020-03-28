import {ConcreteClass, ConcreteVisitor} from "./index";
import {expect} from 'chai';
describe('-----Running test cases for visitor pattern', function () {
    describe('-----Running positive test cases for visitor pattern', function () {
        it('should add increase client variable', function () {
            const client = new ConcreteClass();
            const visitor = new ConcreteVisitor();
            client.doTaskA();
            client.accept(visitor);
            expect(client.clientVariable).to.be.deep.equal(6)
        });
    } );
    describe('-----Running negative test cases for visitor pattern', function () {

    } );
} );
