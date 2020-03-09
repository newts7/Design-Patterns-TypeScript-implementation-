import {SimpleSingleton} from "./index";
import { expect} from 'chai';

describe('-----Running test cases for singleton----',function(){
    describe('----Running positive test cases for singleton', function(){
        it('should create one instance of the class', function () {
            const singletonInstance = SimpleSingleton.getInstance();
            expect(singletonInstance).to.be.instanceOf(SimpleSingleton);
        });
    });
    describe('----Running negative test cases for singleton', function(){
        it('should not create more than once instance of class', function () {
            const instance1 = SimpleSingleton.getInstance();
            const instance2 = SimpleSingleton.getInstance();
            expect(instance1).to.be.deep.equal(instance2);
        });
    });
});
